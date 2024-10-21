import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { SucessRegisterationComponent } from '../sucess-registeration/sucess-registeration.component';

@Component({
  selector: 'app-users-registration',
  templateUrl: './users-registration.component.html',
  styleUrls: ['./users-registration.component.scss']
})
export class UsersRegistrationComponent {
  public userForm: FormGroup;
  public emailPattern: RegExp = new RegExp(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/);
  public isSubmitLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private matdialog: MatDialog
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      mern: [false],
      mean: [false],
      mevn: [false],
      experience: ['fresher', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('^\\d{10}$')]]
    });
  }

  public onSubmit() {
    this.isSubmitLoading = true
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).subscribe(response => {
        this.isSubmitLoading = false;
        this.userForm.reset();
        const dialogRef = this.matdialog.open(SucessRegisterationComponent, {
          width: '400px',
          height: '300px',
          disableClose: true
        });
        
      }, error => {
        this.isSubmitLoading = false;
        console.error('Error adding user', error);
      });
    }
  }

  public onReset() {
    this.userForm.reset();
  }
}