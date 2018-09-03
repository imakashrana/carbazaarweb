import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Car } from '../model/car.model';
const httpOptions = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
                                .set('Access-Control-Allow-Origin', '*')
                                 .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
     
@Injectable({
  providedIn: 'root'
})
export class CarService {

  private _url='https://carbazaarapi.herokuapp.com/car/addcar'
  //  private addcarurl="http://localhost:3000/car/addcar";
  constructor(private _http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // console.error(
      //  `Backend returned code ${error.status}, ` +
      //  `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
  getCars(): Observable<any> {
    debugger;
    return this._http.get('https://carbazaarapi.herokuapp.com/car/getallcars/total', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  
  getCarById(id: string) {
    debugger;
    return this._http.get( 'https://carbazaarapi.herokuapp.com/car/getbycarid/' + id).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
// add car by user after login
addCar(fileToUpload,car : Car){
  debugger;let userid = localStorage.getItem('_id')
  debugger;
  const formData: FormData = new FormData();
  if(fileToUpload!=null){ formData.append('images', fileToUpload);}
  formData.append('manufacturer', car.Manufacturer.toString());
  formData.append('model', car.Model.toString());
  formData.append('registration_no', car.Registration_no.toString());
  formData.append('speedometer', car.Speedometer.toString());
  formData.append('userid', userid);
formData.append('Cost', car.Cost.toString());
console.log(formData);

debugger;
  return this._http.post(this._url, formData);
}
// addCar(car: Car ) {
//   const cardata = {
//     registration_no: car.Registration_no,
//     manufacturer: car.Manufacturer,
//     model: car.Model,
//     speedometer: car.Speedometer,
//    // photos: car.photos,
//     // userid: car.userid,
//     // cost: car.Cost
//   };

//   debugger;
//   return this._http.post( 'http://localhost:3000/car/addcar', cardata).pipe(
//     map(this.extractData),
//     catchError(this.handleError));

// }
  // registerUser(user){
  //   return this._http.post<any>(this.addcarurl,user)
  // }
  // Send car detail for user by email
  sendcardetail(cardetail) {
    debugger;
    return this._http.post<any>('https://carbazaarapi.herokuapp.com/users/sendcardetail', cardetail, httpOptions);
  }
  // Car Accept by user
  carAccept(body) {
    debugger;
    return this._http.put('https://carbazaarapi.herokuapp.com/car/updateCarStatus/'  , body);
  }
  // send email to admin for ask a price of car
  sendRejectmail(email) {
    debugger;
    return this._http.post('https://carbazaarapi.herokuapp.com/users/rejectcar' + email, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
}
