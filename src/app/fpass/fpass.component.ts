import { Component, OnInit } from '@angular/core';
import { FinduserService } from '../services/finduser.service';
import { Router} from "@angular/router";
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-fpass',
  templateUrl: './fpass.component.html',
  styleUrls: ['./fpass.component.css']
})
export class FpassComponent implements OnInit {
  email; string;
  message: string;
  constructor(private findservice: FinduserService) {}
  ngOnInit() {
    this.email = localStorage.getItem('email');
    this.findservice.getUserByEmail()
    .subscribe((res: any) => {
      debugger;
      this.message = res.message;
     });
  }
}