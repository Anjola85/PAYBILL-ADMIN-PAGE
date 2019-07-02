import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

import { TablesRoutes } from './tables.routing';

// Tables Component
import { BasicTableComponent } from './basic-table/basic-table.component';
import { DataTableComponent } from './transaction-list/data-table.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';




@NgModule({
    imports: [
        RouterModule.forChild(TablesRoutes),
        DataTablesModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
    ],
    declarations: [
        BasicTableComponent,
        DataTableComponent
    ],
    providers: [
        AppService
    ]
})
export class TablesModule { }
