import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email = {};
  password = {};
  userid = {};
  name = {};
  log: boolean = false;
  notlog : boolean = true;
  constructor(private router: Router, private toastr: ToastrService) { }
  ngOnInit(): void {  
      debugger;
    debugger;
    if (localStorage.getItem('userToken')) {
  this.log = true;
  this.notlog = false;
  this.email = localStorage.getItem('email');     // Retried data
  this.name = localStorage.getItem('firstname');
  this.userid = localStorage.getItem('_id');
}
  }
  authSignOut() {
    // debugger
     localStorage.removeItem('firstname');
     localStorage.removeItem('userTokan');
     localStorage.removeItem('lastname');
     localStorage.removeItem('email');
     localStorage.removeItem('_id');
     localStorage.clear();
     if (localStorage.removeItem('userTokan') == null) {
       this.log = false;
     }

     this.router.navigate(['/']);
 }
}
