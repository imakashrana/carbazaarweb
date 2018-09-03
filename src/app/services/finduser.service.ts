import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
 var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
                                .set('Access-Control-Allow-Origin', '*')
                                 .set('Access-Control-Allow-Methods', 'POST');
        const httpOptions =  {
            Headers:headers
        };
@Injectable({
  providedIn: 'root'
})

export class FinduserService {
 
  private apiupdatepassword="http://localhost:3000/users/updatepassword";
  constructor(private _http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    }else {
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
     return body || { };
   }
   getUserByEmail() {
    return this._http.get('http://localhost:3000/users/resetemail', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));     
  }
  // updatepassword(email: string) {
  //   debugger;
  //   return this._http.get(environment.apiurl+'/users/updatepassword' + email).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError));
  // }
  updatepassword(user){
    return this._http.put<any>(this.apiupdatepassword,user)
  }
}
