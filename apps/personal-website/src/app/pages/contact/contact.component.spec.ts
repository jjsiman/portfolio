import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { mocked } from 'ts-jest/utils';
import { EmailService } from '../../shared/services/email.service';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let emailService: EmailService;

  beforeEach(waitForAsync(() => {
    const mockedEmailService = mocked(EmailService, true);

    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule
      ],
      declarations: [ContactComponent],
      providers: [
        FormBuilder,
        EmailService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    emailService = TestBed.inject(EmailService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exit loading after form response', () => {
    expect(component.submitResponse).toBeFalsy();
    component.handleEmailResponse();
    expect(component.submitResponse).toBeTruthy();
  });

  it('should display a success message after submission', () => {
    component.handleEmailResponse(true);
    expect(component.submitSuccess).toBeTruthy();
  });

  it('should display a failure message after submission', () => {
    component.handleEmailResponse();
    expect(component.submitSuccess).toBeFalsy();
  });

  it('should call the email service with the form value', () => {
    const spyService = jest.spyOn(emailService, 'postEmail').mockReturnValue(of(new HttpResponse()));
  
    component.formGroup.patchValue({
      'name': 'name',
      'email': 'name@test.com',
      'message': 'This is a test message'
    });
    component.formGroup.updateValueAndValidity();
    component.sendEmail();
  
    expect(spyService).toHaveBeenCalledTimes(1);
    expect(spyService).toHaveBeenCalledWith(component.formGroup.value);
  });
});
