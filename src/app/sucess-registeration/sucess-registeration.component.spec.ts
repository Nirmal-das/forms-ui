import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessRegisterationComponent } from './sucess-registeration.component';

describe('SucessRegisterationComponent', () => {
  let component: SucessRegisterationComponent;
  let fixture: ComponentFixture<SucessRegisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessRegisterationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
