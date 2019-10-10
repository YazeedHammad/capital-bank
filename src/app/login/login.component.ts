import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './user.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;
  isValid = true;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  //get property to make easy to access the form controls on the HTML form.
  get formControls() {
    return this.loginForm.controls;
  };


  login(form) {
    // console.log(this.loginForm.value);
    // this.isSubmitted = true;
    // if (this.loginForm.invalid) {
    //   return;
    // }
    // if (!this.authService.isLoggedIn()) {
    //   this.isValid = false;
    // }

    // this.authService.login(this.loginForm.value);
    // this.router.navigateByUrl('/home');

    if (form.valid) {
      const isValid = this.authService.login(form.value);
      console.log(isValid);

      if (isValid) {
        this.router.navigateByUrl('/home');
      } else {
        this.isValid = false;
      }

    } else {
      this.isValid = false;

    }
  }




}
