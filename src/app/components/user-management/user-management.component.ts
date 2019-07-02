import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users: any;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.get('/users').subscribe(res => {
      console.log('res:', res);
      if (res) {
        this.users = res['data'];
      }
    }, err => {
      console.log('err:', err);
    });

  }

}
