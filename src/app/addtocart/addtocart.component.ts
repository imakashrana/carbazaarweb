import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  email; string;
  message: string;
  constructor(private authservice: AuthService) {}

  ngOnInit() {

    this.email = localStorage.getItem('email');
    this.authservice.sendEmailforprice()
    .subscribe((res: any) => {
      debugger;
      this.message = res.message;
     });
  }
  

}