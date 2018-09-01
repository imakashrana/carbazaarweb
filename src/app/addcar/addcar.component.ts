import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup } from '@angular/forms';
import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { timeout } from 'rxjs/operators';
@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {
  car: Car;
  previewPhoto = false;
  registerCar = { };
  _id = {};
  userid = {};
  fileToUpload: File = null;
  logo : any;
  constructor(private carService: CarService, private router: Router,
    private toastr: ToastrService, private spinner: NgxSpinnerService ) { }
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    debugger;
    this.car = {
      userid: localStorage.getItem('_id'),
      Registration_no: '',
      Manufacturer: '',
      Model:'',
      Speedometer: '',
      isactive : false,
      isDeleted : false,
      photos : '',
      Cost: '',
      status :'yes'
    };
}
handleFileInput(file: FileList) {
  debugger
  this.fileToUpload = file.item(0);

  //Show image preview
  var reader = new FileReader();
  reader.onload = (event:any) => {
    this.logo = event.target.result;
  }
  reader.readAsDataURL(this.fileToUpload);
}
saveCar() {
  this.spinner.show();
  this.carService.addCar(this.fileToUpload,this.car)
  .subscribe((res: any) => {
    console.log(res);
    debugger;
     if (res.status === 'Success') {
      this.spinner.hide();
      this.toastr.success(res.message);
      this.router.navigate(['usercarlisting']);
      return false;
    } else {
      this.toastr.error(res.message);
    }
  }, err => {
    debugger;
    this.spinner.hide();
    console.log(err);
  });
}
}
