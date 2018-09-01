import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router :Router,private _auth:AuthService) { }

  ngOnInit() {
  }

  authSignOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('userToken');
    this.router.navigate(['login']);
  }
}
