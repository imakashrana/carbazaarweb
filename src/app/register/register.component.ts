import { Component, OnInit } from '@angular/core';
import  { AuthService } from '../services/auth.service';
import { Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerUserData= { firstName: '', lastName: '', email: '' , password:'',confirmPassword:''};
  constructor(private spinner: NgxSpinnerService,private auth: AuthService,
     private router: Router,private toastr: ToastrService) { }
  ngOnInit() {}
registeruser() {
  this.spinner.show();
  debugger;
    this.auth.registeruser(this.registerUserData)
      .subscribe(res => {
        this.spinner.hide();
        console.log(res);
        debugger;
        this.registerUserData = res.users;
        if (res.status == 'Success') {
          this.toastr.success(res.message);
          this.router.navigate(['login']);
          return false;
        } else{
          this.toastr.error(res.message);
        }
      }, err => {
        this.toastr.error(err)
        console.log(err);
      });
  }
  
}
