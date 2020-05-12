import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  private baseUrl = 'http://localhost:8085/theaterCont/alltheater';
  private baseUrl1='http://localhost:8085/theaterCont/addTheater';
  private baseUrl2 ='http://localhost:8085/theaterCont/deletetheater';
  private baseUrl3='http://localhost:8085/theaterCont/updatetheater';
  private baseUrl4='http://localhost8085/theaterCont/theater';
  private baseUrl5='http://localhost:8085/theaterCont/addtheaterBycityId';
  private baseUrl6='http://localhost:8085/theaterCont/searchBycityId';

  constructor(private http: HttpClient) { }


  getTheater(theaterId: number): Observable<any> {
    return this.http.get(`${this.baseUrl4}/${theaterId}`);
  }
  createTheaterByCityId(cityId:number,value:any): Observable<object>
  {
    return this.http.post(`${this.baseUrl5}/${cityId}`,value);
  }
  createTheater(Theater: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl1}`, Theater);
  }

  updateTheater(theaterId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl3}/${theaterId}`, value);
  }

  deleteTheater(theaterId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl2}/${theaterId}`, { responseType: 'text' });
  }

  getTheaterList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  searchTheater(cityId:number,value:any): Observable<any>
  {
    return this.http.get(`${this.baseUrl6}/${cityId}`,value);
  }
}
