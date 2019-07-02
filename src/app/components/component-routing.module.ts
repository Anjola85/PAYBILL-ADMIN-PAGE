import { Routes, RouterModule } from '@angular/router';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { LoginComponent } from './login/login.component';
import { ExistingBillerComponent } from './existing-biller/existing-biller.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: 'admin',
        component: AdminManagementComponent,
        data: {
            title: 'Admin'
        }
    },
    {
        path: 'add-admin',
        component: AddAdminComponent,
        data: {
            title: 'add-admin'
        }
    },
    {
        path: 'user',
        component: UserManagementComponent,
        data: {
            title: 'User'
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'login'
        }
    },
    {
        path: 'billers',
        component: ExistingBillerComponent,
        data: {
            title: 'billers'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentRoutingModule {

}
