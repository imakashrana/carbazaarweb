import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinduserService } from '../services/finduser.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  updatepassworddata={ password:''}
  constructor(private router: Router, private finduserservice: FinduserService) { }

  ngOnInit() {
   
     }
     updatepassword() {
      this.finduserservice.updatepassword(this.updatepassword)
        .subscribe(res => {
          console.log(res);
          debugger;
          this.updatepassworddata = res.users;
          if (res.status == 'Success') {
            this.router.navigate(['login']);
            return false;
          }
        }, err => {
          console.log(err);
        });
    }
}
