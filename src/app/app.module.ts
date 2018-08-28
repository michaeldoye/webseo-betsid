import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SectionAboutComponent } from './client/section-about/section-about.component';
import { SectionWhyComponent } from './client/section-why/section-why.component';
import { SectionCommissionComponent } from './client/section-commission/section-commission.component';
import { SectionTestimonialsComponent } from './client/section-testimonials/section-testimonials.component';
import { SectionContactComponent } from './client/section-contact/section-contact.component'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

@NgModule({
  declarations: [
    AppComponent,
    SectionAboutComponent,
    SectionWhyComponent,
    SectionCommissionComponent,
    SectionTestimonialsComponent,
    SectionContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
