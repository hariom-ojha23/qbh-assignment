import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http'
import { FormFieldsInterface } from '../../shared/interfaces/FormFields';
import { catchError, Observable, throwError } from 'rxjs';
import { ClientInfoInterface } from '../../shared/interfaces/ClientInfo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:3000'

  addClientInfo(clientInfo: FormFieldsInterface) {
    return this.http.post(`${this.baseUrl}/client-info`, clientInfo, httpOptions)
               .pipe(catchError(this.handleError))
  }

  getAllClientinfo(): Observable<ClientInfoInterface[]> {
    return this.http.get<ClientInfoInterface[]>(`${this.baseUrl}/client-info`)
               .pipe(catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error.message)
    } else {
      console.error(error.status, error.error.message)
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.'),
    )
  }

}
