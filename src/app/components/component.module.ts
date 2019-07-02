import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { ComponentRoutingModule } from './component-routing.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { providers } from 'ng2-toasty';
import { ExistingBillerComponent } from './existing-biller/existing-biller.component';



@NgModule({
    imports: [
        CommonModule,
        ComponentRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        AdminManagementComponent,
        UserManagementComponent,
        AddAdminComponent,
        LoginComponent,
        ExistingBillerComponent    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
      ],
})
export class ComponentModule {

}
