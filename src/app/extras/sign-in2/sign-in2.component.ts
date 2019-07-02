import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationModule } from '../authentication.modules';



@Component ({
    templateUrl: 'sign-in2.html'
})

export class SignIn2Component {

    message = '';
    errMessage = '';
    myForm;

    constructor(private formBuilder: FormBuilder, private appService: AppService, private router: Router,) {
        this.myForm = new FormGroup({
            username: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
          });
    }



    doLogin() {
        console.log(this.myForm.value);
        this.appService.post('/login', this.myForm.value).subscribe(res => {
          console.log('res:', res);
          if (res.status) {
            this.router.navigate(['/dashboard']);
            this.message = res['message'];
          }
        }, err => {
          console.log('error:', err);
          if (err) {
            this.errMessage = 'INVALID!';
          }
        });
      }

}
