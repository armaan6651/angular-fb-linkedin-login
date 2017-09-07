import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';

import { DataService } from './data-ser.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HttpModule } from '@angular/http';
import { FacebookModule } from 'ngx-facebook';
import { RouterModule }   from '@angular/router';

import { Router } from '@angular/router';

import { LinkedInSdkModule } from 'angular-linkedin-sdk';

import { TwitterService } from 'ng2-twitter';


// import { Angular2SocialLoginModule } from "angular2-social-login";


// let providers = {
//     "google": {
//       "clientId": "GOOGLE_CLIENT_ID"
//     },
//     "linkedin": {
//       "clientId": "7842ficiaikl37"
//     },
//     "facebook": {
//       "clientId": "FACEBOOK_CLIENT_ID",
//       "apiVersion": "<version>" //like v2.4 
//     }
//   };


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FacebookModule.forRoot(),
    LinkedInSdkModule,
    //Angular2SocialLoginModule
  ],
  providers: [DataService,
  TwitterService,
  //linkedin api key
  { provide: 'apiKey', useValue: '7842ficiaikl37' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// Angular2SocialLoginModule.loadProvidersScripts(providers);
