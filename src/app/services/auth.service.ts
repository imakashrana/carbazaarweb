import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../model/users.model'
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
interface registerResponse{
  success:boolean
}
const httpOptions = { 
  headers: new HttpHeaders({
          'Content-Type':  'application/json',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Origin': '*'
                      
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private _registerurl="https://carbazaarapi.herokuapp.com/users/adduser";
  private _loginurl="https://carbazaarapi.herokuapp.com/users/login";
  constructor(private http: HttpClient ,private router: Router) { }
  private extractData(res: Response) {
    const body = res;
     return body || { };
   }
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
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  //register api
  registeruser(user){
    debugger;
    return this.http.post<any>(this._registerurl,user)
  }
  //login api
  loginUser(user){
    debugger;
    return this.http.post<any>(this._loginurl,user)
  }
  // Get car's by user
getCarUserList(userid) {

  return this.http.get<any>('https://carbazaarapi.herokuapp.com/car/getByID/' + userid, userid);
}
// call node Api for display particular car detail on frontend in angular
sendEmailforprice() {
  return this.http.get(`https://carbazaarapi.herokuapp.com/users/sendemail`, httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));
}
authSignOut() {
  localStorage.removeItem('user');
  localStorage.removeItem('userToken');
  this.router.navigate(['login']);
}
// registerUsers(user : User){
//   const userdata = {
//     password: user.Password,
//     email: user.Email,
//     firstname: user.FirstName,
//     lastname: user.LastName
//   }
//   debugger;
//   return this.http.post(this._registerurl, userdata);
//}

// ChangePassword service

changePassword(email, registerUserData) {
  debugger;
  return this.http.post<any>('https://carbazaarapi.herokuapp.com/users/changepassword/' + email, registerUserData);
}
// Delete car's by user
deleteCarbyuser(r) {
  debugger;
    return this.http.put<any>( 'https://carbazaarapi.herokuapp.com/car/deletecar/' + r, httpOptions);
  }
}
