import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  CarId: any;
  id: string;
  log: Boolean = false;
  ownername:{}
  ownerid:{}
  customerid:{}
  customername:{}
  customeremail:{}
  cost:{}
  constructor(private route: ActivatedRoute, private carService: CarService, private spinner: NgxSpinnerService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    if (localStorage.getItem('userToken')) {
      this.log = true;
  }
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.carService.getCarById(this.id)
      .subscribe((res: any) => {
        debugger;
        console.log(res.cars);
        this.CarId = res.cars;
        this.ownername = res.cars.user.firstname + ' ' + res.cars.user.lastname;
        this.CarId.ownername = this.ownername;
        this.ownerid=res.cars.user._id;
        this.CarId.ownerid=this.ownerid;
        this.customerid = localStorage.getItem('_id');
        this.CarId.customerid=this.customerid;
        this.customername= localStorage.getItem('firstname');
        this.CarId.customername=this.customername;  
        this.customeremail = res.cars.user.email;
        this.CarId.customeremail=this.customeremail;
      });   
  }   
  // send user detail and car detail by email to admin
  sendcardetail() {
    this.spinner.show();
    setTimeout(() => {
      // spinner ends after 5 seconds 
      this.spinner.hide();
    }, 5000);
    debugger;
    const body = {

      Registration_no: this.CarId.registration_no,
      Manufacturer: this.CarId.manufacturer,
      Model: this.CarId.model,
      customerid: this.CarId.customerid,
      ownername: this.CarId.ownername,
      customername: this.CarId.customername,
      customeremail: this.CarId.customeremail,
      cost: this.CarId.cost
    };
    this.carService.sendcardetail(body)
      .subscribe((res: any) => {
        console.log(res);
        debugger;
        if (res.status === 'Success') {
this.toastr.success(res.message);
          this.router.navigate(['addtocart']);
          return false;
        } else {
          this.toastr.error(res.message);
        }
      }, err => {
        debugger;
        console.log(err);
      });
  }
}