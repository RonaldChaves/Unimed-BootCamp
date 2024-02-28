import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = '' //'https://sheet.best/api/sheets/3c4fb4ca-5d99-4e91-9915-a2320e693577';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL);
  }

  postUser(user: User): Observable<User[]> {
    return this.httpClient.post<User[]>(this.apiURL, user, this.httpOptions)
  }

  deleteUser(id: number): Observable<User[]> {
    return this.httpClient.delete<User[]>(`${this.apiURL}/id/${id}`);
  }

  updateUser(id: string, user: User): Observable<User[]> {
    return this.httpClient.put<User[]>(`${this.apiURL}/id/${id}`, user, this.httpOptions)
  }

  getUser(id: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiURL}/id/${id}`)
  }
}
