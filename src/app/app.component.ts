import { Component, ViewChild } from '@angular/core';
import { DataService } from './data-ser.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


 
import {Http} from '@angular/http';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { LinkedInService } from 'angular-linkedin-sdk';

import { TwitterService } from 'ng2-twitter';

//import { AuthService } from "angular2-social-login";


var access_token="";
var tok = localStorage.getItem('token');
console.log("from store "+tok);
var login_status="";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})





export class AppComponent {
  title = 'Wipro';

  // myObject = {
  //   name: "Jon Snow",
  //   age: 22,
  //   sex: "male"
  // }
  
  users: Array<any>;


  
  constructor(private http:Http, private fb: FacebookService, private linkedInService: LinkedInService){
    console.log('Initializing Facebook');
    
    fb.init({
          appId: '1928905587376942',
          version: 'v2.9'
        });



    this.subscribeToisInitialized();
    

  }
  sub;

// check(){
//   this.signIn("linkedin");
// }

// logout(){
//     this.auth.logout().subscribe(
//       (data)=>{console.log(data);}
//     )
//   }

//   signIn(provider){
//     this.sub = this.auth.login(provider).subscribe(
//       (data) => {
//                   console.log(data);
//                   //user data 
//                   //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn), idToken(only for google) 
//                 }
//     )
//   }

           apiKey="";
  //          public getApiKeyFromSdkIN() {
  //   // Retrieve the API key used in the library through the SDK IN variable
  //   this.apiKey = this.linkedInService.getSdkIN().ENV.auth.api_key;
  //   console.log(this.apiKey);
  // }
  url2="";

n;

subscribeToLogin1(){
  this.linkedInService.login().subscribe({
    next: (state) => {
      // state will always return true when login completed 
      console.log("sslogging in");
      console.log(state);
      this.n=1;
      this.rawApiCall();
    },
    complete: () => {
      // Completed
    }
  });
}



public rawApiCall(){
    const url = '/people/~:(id,first-name,email-address,picture-url)?format=json';
    this.linkedInService.raw(url)
      .asObservable()
        .subscribe({
          next: (data) => {
            console.log(data);
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            console.log('RAW API call completed');
          }
        });


}




public subscribeToLogout(){
  this.linkedInService.logout().subscribe({
    next: () => {
      // does not emit a value 
      console.log("sslogging out");
    },
    complete: () => {
      // Completed
    }
  });
}

public subscribeToLogin(){

      window.location.href = 'https://www.linkedin.com/oauth/v2/authorization?client_id=7842ficiaikl37&redirect_uri=http://localhost:4200/&response_type=code';

        console.log("sslogging in");

        //this.url2="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=7842ficiaikl37&redirect_uri=http://localhost:4200/&state=987654321&scope=r_basicprofile";
        this.url2='https://www.linkedin.com/oauth/v2/authorization?client_id=7842ficiaikl37&redirect_uri=http://localhost:4200/&response_type=code';

//   this.http.get(this.url2).map(res => res.json()).subscribe(data => {
      
//       console.log(data);
      
//   },
//   err => {
    
// console.log("error linkedin") 
//  });

}
//linkedin
  public subscribeToisInitialized(){

    // Subscribe to any values the observable will emit about logged in state
  this.linkedInService.isUserAuthenticated$.subscribe({
    next: (state) => {
      // this.isUserAuthenticated = state;
            console.log(state);

    }
  });



    this.linkedInService.isInitialized$.subscribe({
    next: (state) => {
      // state will always return true when API finishes loading
      console.log(state);
            

    },
    complete: () => {
      // Completed
            console.log("completed");

    }
  });
}


  
  getLoginStatus() {
    this.fb.getLoginStatus()
      .then((res: LoginResponse)=>{
        console.log(res.status);
        login_status=res.status;
      })
      .catch(console.error.bind(console));
      
      
  }

 


     login() {

      // if(login_status=="connected"){
      //   console.log("conn");
      // }else{
      //   console.log("disconn");
      // }
      
      this.fb.login()
        .then((res: LoginResponse) => {
          console.log('Logged in', res);
           access_token =   this.fb.getAuthResponse()['accessToken'];
          console.log("Access token issssssss  "+access_token);

          localStorage.setItem('token',access_token);
         
          
        })
        .catch(this.handleError);
    }

    

    private handleError(error) {
      console.error('Error processing action', error);
    }
    

  
  // myArr = ['one','two','three'];

  
  fb_conn=true;
  myButton=true;


  

  angularLogo="https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F29%2F5a40855b-b555-4732-8fc9-365880725cbc.jpg";

  myEvent(event){
    console.log(event);
  }

  wall='wall-css';
  bluebut='blue-but-css';
  
  
  //access_token="EAACEdEose0cBAPiuIRGb7CeERDmDiuZBcb788OB7QR8ZA3g5vqybAYtXbPGHsZAYiYzuK1VgVXDvIwJZCeFU7sdjZClMeXGrB66DNbyoWS3el74qZAhJeepjs7ysHOVsr9lZBeVMWSf3Q3zq3SzY0gVsDYzI82ugHDOUOrI2rouz18Fla37qwYc26xpshJno6YZD";
  
  

  result;
  result1="";
  posts;
  name="";
  id="";
  age="";
  img_url="";

  url1="";
  ngOnInit(){

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=1928905587376942";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    

    this.fb.login()
    .then((res: LoginResponse) => {
      console.log('Logged in', res);
       access_token =   this.fb.getAuthResponse()['accessToken'];
       window.location.reload();
      console.log("Access token issssssss  "+access_token);

      
      
      
    })
    .catch(this.handleError);

    //Create a database named "mydb":
    // this.url1 = "mongodb://localhost:27017/armaan";
    console.log(access_token);
    
          
    
    
    
    var url = "https://graph.facebook.com/me?fields=id,name,age_range,picture&access_token="+tok;
    

    this.http.get(url).map(res => res.json()).subscribe(data => {
      this.fb_conn=true;
      console.log(data);
      this.name="Welcome "+data.name;
      this.id="Your id is "+data.id;
      this.age="You are "+data.age_range.min+"years old!";
      this.img_url=data.picture.data.url;
      console.log(data.picture.data.url);
  },
  err => {
    
    this.fb_conn=false;
  });





//   this.http.get("https://graph.facebook.com/me?fields=friends{name}&access_token="+access_token).map(res => res.json()).subscribe(data => {
//     console.log(data);
//     this.fb_conn=true;
// },
// err => {
//   this.fb_conn=false;
// });
   
    }

    refresh(){
      window.location.reload();
    }
  
    
    

    
    
      

    
    

  
  
    
    

}
