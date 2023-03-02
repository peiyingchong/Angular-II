import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({"Content-Type":"application/json"})
}
const URL_BACKEND = "http://localhost:8081";
@Injectable({
  //available to all modules
  providedIn: 'root'
})
export class DatabaseService {

  //request a dependency, my service depends on http
  //service will send http request
  constructor(private http: HttpClient) { }

  createParcel(obj:any){
    return this.http.put(URL_BACKEND+"/sender/parcel", obj, httpOptions)
  }

  getParcels(){
    return this.http.get(URL_BACKEND+ "/parcel")
  }

  postSender(obj:any){
    return this.http.post(URL_BACKEND+"/sender",obj,httpOptions)
  }

  getSender(){
    return this.http.get(URL_BACKEND+ "/sender")
  }
  
}
