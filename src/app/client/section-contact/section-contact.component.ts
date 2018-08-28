import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms'
import { ContactService } from '../contact.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.css']
})
export class SectionContactComponent implements OnInit {
  @HostBinding('class.container') hostClass: boolean = true;
  form: FormGroup; 
  captchaKey: string;

  constructor(
    private fb: FormBuilder,
    private mail: ContactService,
    public snackBar: MatSnackBar
  ) { } 

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      captcha: ['', Validators.required]
    })
  }

  onSubmit(formDirective: FormGroupDirective) {
    if(this.captchaKey !== this.captcha.value) {
      return this.openSnackBar('Something went wrong, try again.');
    }
    this.mail.sendMessage(this.form.value).subscribe((data: any) => {
      if(data.status === 'success') {
        formDirective.resetForm();
        this.form.reset(); 
        this.openSnackBar('Your message has been sent!');
      }
    });
  }

  resolved(captchaResponse: string) {
    this.captchaKey = captchaResponse;
  }

  openSnackBar(message: string): void {
    let snackBarRef = this.snackBar.open(message, 'Close', { duration: 30000 });
    snackBarRef.onAction().subscribe(() => {
      snackBarRef.dismiss()
    })    
  } 

  get name() { return this.form.get('name') }
  get email() { return this.form.get('email') }
  get subject() { return this.form.get('subject') }
  get message() { return this.form.get('message') }
  get captcha() { return this.form.get('captcha') }

}

