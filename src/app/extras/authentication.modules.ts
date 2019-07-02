import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AuthenticationRoutes } from './authentication.routing';

// Authentication Component
import { SignInComponent } from './sign-in/sign-in.component';
import { SignIn2Component } from './sign-in2/sign-in2.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Page500Component } from './500/500.component';
import { Page404Component } from './404/404.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppService } from '../app.service';
import { HttpModule } from '@angular/http';


@NgModule({
    imports: [
        RouterModule.forChild(AuthenticationRoutes),
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        HttpModule,
    ],
    declarations: [
        SignInComponent,
        SignIn2Component,
        SignUpComponent,
        Page500Component,
        Page404Component
    ],
    providers: [
        AppService
    ]
})
export class AuthenticationModule { }
