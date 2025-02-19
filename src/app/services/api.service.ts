import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL = 'https://localhost:7243/api';
  constructor(private http:HttpClient) { }
  
  // Get all products
  public getProducts():Observable<any>{

    return this.http.get(`${this.apiURL}/products`);
  }
}
