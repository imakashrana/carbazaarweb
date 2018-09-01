import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  email = {};

  public registerUserData = { oldpassword: '', password: ''};

  constructor(private auth: AuthService, private router: Router, 
    private toastr: ToastrService, private spinner: NgxSpinnerService ) { }
  ngOnInit() {
  }
  // register service
  changePassword() {
    this.spinner.show();
    debugger;
    this.email = localStorage.getItem('email');
    this.auth.changePassword(this.email, this.registerUserData )
      .subscribe(res => {
        this.spinner.hide();
        debugger;
        console.log(res);
        if (res.status === 'Success') {
          this.toastr.success(res.message);
          console.log(res.status);
         this.router.navigate(['change-password']);
         return false;
        } else {
          this.toastr.error("error");
        }
      }, err => {
        this.toastr.error("Old password does not exist!");
        console.log(err);
      });
}

}
