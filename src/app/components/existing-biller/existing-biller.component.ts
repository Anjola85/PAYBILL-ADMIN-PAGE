import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-existing-biller',
  templateUrl: './existing-biller.component.html',
  styleUrls: ['./existing-biller.component.css']
})
export class ExistingBillerComponent implements OnInit {

  billers: any;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.get('/billers').subscribe(res => {
      console.log('res:', res);
      if (res) {
        this.billers = res['data'];
      }
    }, err => {
      console.log('err:', err);
    });
  }

}
