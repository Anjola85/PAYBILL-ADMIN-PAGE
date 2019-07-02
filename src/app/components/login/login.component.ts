import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message = '';
  errMessage = '';
  myForm;

  constructor(private formBuilder: FormBuilder, private appService: AppService, private router: Router) {
    this.myForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
   }

  ngOnInit() {
  }

  doLogin() {
    console.log(this.myForm.value);
    this.appService.post('/api/login', this.myForm.value).subscribe(res => {
      console.log('res:', res);
      if (res.status) {
        this.router.navigate(['/dashboard']);
      }
    }, err => {
      console.log('error:', err);
      if (err) {
        this.errMessage = err.error.message;
      }
    });
  }

}
