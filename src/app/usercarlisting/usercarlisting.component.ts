import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router} from "@angular/router";
@Component({
  selector: 'app-usercarlisting',
  templateUrl: './usercarlisting.component.html',
  styleUrls: ['./usercarlisting.component.css']
})
export class UsercarlistingComponent implements OnInit {
  status = 'accepted';
  yes = 'yes';
  Carlisting: any[];
  userid = {};
  constructor( private auth: AuthService, private router: Router, 
    private toastr: ToastrService, private spinner: NgxSpinnerService ) {}
 ngOnInit() {
  this.userid = localStorage.getItem('_id');
    this.auth.getCarUserList(this.userid)
    .subscribe((res: any) => {
      this.Carlisting = res.cars;
      debugger;
      console.log(this.Carlisting);
     });
  }
  deletecarbyuser(regno) {
    debugger;
   this.auth.deleteCarbyuser(regno)
   .subscribe(res => {
     this.spinner.hide();
     debugger;
     console.log(res);
     if (res.status === 'Success') {
       this.toastr.success(res.message);
       console.log(res.status);
      this.router.navigate(['/userlisting']);
      // return false;
     } else {
       this.toastr.error(res.message);
     }
   }, err => {
     console.log(err);
   });

}
}
