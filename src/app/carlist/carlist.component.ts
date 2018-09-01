import { Component, OnInit } from '@angular/core';
import { CarService } from  '../services/car.service';
@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {
  cars: any[];
  car: any ;
  status = 'accepted';
  yes = 'yes';
    constructor(private carservice: CarService) { }
  
    ngOnInit() {
      this.carservice.getCars().subscribe((data: any) => {
      debugger;
      this.cars = data.TotalCars;
      });
    }
}