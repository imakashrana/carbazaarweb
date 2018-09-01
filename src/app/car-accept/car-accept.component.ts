import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-car-accept',
  templateUrl: './car-accept.component.html',
  styleUrls: ['./car-accept.component.css']
})
export class CarAcceptComponent implements OnInit {
  reg_id: string;
  status: string;
  registration_no:{}
  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router) {}
  ngOnInit() {
    debugger;
    this.route.queryParams.subscribe(params => {
      const body = {
      registration_no:params['regno'],
      customername:params['customername'],
      customeremail:params['email'],
      customerid:params['id']
      }; 
    this.carService.carAccept(body)
    .subscribe((res: any) => {
      debugger;
      this.status = res.status;
      console.log(res);
     });
    });
  }
}
// this.reg_id = this.route.snapshot.paramMap.get('reg_id');
// this.carService.carAccept(this.reg_id)
// .subscribe((res: any) => {
//   debugger;
//   this.status = res.status;
//   console.log(res);
//  });