import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetRequestComponent } from './components/password/reset-request/reset-request.component';
import { ResetResponseComponent } from './components/password/reset-response/reset-response.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './tests/test.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
// import { ReqServiceService }  from './Services/Req-Service.Service';
// import { AfterLoginService } from './Services/after-login.service';
// import { AuthService } from './Services/auth.service';
// import { BeforeLoginService } from './Services/before-login.service';
// import { TokenService } from './Services/token.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    ResetRequestComponent,
    ResetResponseComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptorService,
          multi: true
      }
    // TokenService,
    // ReqServiceService,
    // AfterLoginService,
    // AuthService,
    // BeforeLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
