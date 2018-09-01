import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {email: '' , password:''}
  constructor(private _auth: AuthService, private router: Router,
    private toastr: ToastrService, private spinner: NgxSpinnerService) { }
  ngOnInit() {
  }
  loginUser() {
    this.spinner.show();
    this._auth.loginUser(this.loginUserData)
      .subscribe(res => {
        this.spinner.hide();
        console.log(res);
        debugger;
        localStorage.setItem('email', res.user.email);
        localStorage.setItem('_id', res.user._id);
        localStorage.setItem('firstname', res.user.firstname);
        localStorage.setItem('lastname', res.user.lastname);
        localStorage.setItem('userToken', res.user.token);
        this.loginUser = res.users;
        if (res.auth == true) {
          debugger;
          this.toastr.success(res.msg);
          this.router.navigate(['usercarlisting']); 
          return false;
        }
        else {
          this.spinner.hide();
          this.toastr.error("Invalid details");
        }
      }, err => {
        this.spinner.hide();
        this.toastr.error('everything is broken', 'Major Error', {
          timeOut: 3000
          });
      });
  }
}