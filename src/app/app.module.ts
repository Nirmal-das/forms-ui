import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { UsersRegistrationComponent } from './users-registration/users-registration.component';
import { SucessRegisterationComponent } from './sucess-registeration/sucess-registeration.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProgressButtonComponent } from './progress-button/progress-button.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [AppComponent, SucessRegisterationComponent, UsersRegistrationComponent, ProgressButtonComponent],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatTooltipModule,
    MatIconModule,
    MatProgressSpinnerModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
