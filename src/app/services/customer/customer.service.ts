import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from 'src/app/models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl:string = "";
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<CustomerResponseModel>{
    return this.httpClient.get<CustomerResponseModel>(this.apiUrl);
  }
}


