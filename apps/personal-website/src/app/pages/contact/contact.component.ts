import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../../shared/services/email.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'portfolio-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formGroup = this.fb.group({
    'name': this.fb.control(''),
    'email': this.fb.control('', [Validators.required, Validators.email]),
    'message': this.fb.control('', [Validators.required]),
    '_email.subject': this.fb.control('Someone reached out to you on your personal site!'),
    '_honeypot': this.fb.control('')
  });

  submitted = false;
  submitResponse = false;
  submitSuccess = false;

  private subink = new SubSink();

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
  }

  /**
   * Use the email service to send a contact email.
   */
  sendEmail() {
    if (this.formGroup.valid) {
      this.submitted = true;
      this.subink.sink = this.emailService.postEmail(this.formGroup.value).subscribe(
        res => this.handleEmailResponse(res.ok),
        () => this.handleEmailResponse()
      );
    }
  }
  
  /**
   * Handle the post request response with either
   * a success or a failure message.
   * 
   * @param isSuccess 
   */
  handleEmailResponse(isSuccess = false) {
    this.submitResponse = true;
    this.submitSuccess = isSuccess;
  }
}
