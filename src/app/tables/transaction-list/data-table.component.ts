import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component ({
    templateUrl: 'data-table.html'
})

export class DataTableComponent implements OnInit {
    dtOptions: DataTables.Settings = {};

    trans: any;

    constructor(private appService: AppService) {
    }

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
        this.appService.get('/transactions').subscribe(res => {
            console.log('res:', res);
            if (res) {
              this.trans = res['data'];
            }
          }, err => {
            console.log('err:', err);
          });
    }
}
