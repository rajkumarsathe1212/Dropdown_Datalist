import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "https://63c8db7a320a0c4c953be2f4.mockapi.io/api/v1/";

  public dataurl = "http://universities.hipolabs.com/search?country=United+States";

  constructor(private http:HttpClient) { }

  getdata() {
    return this.http.get(this.dataurl);
  }

  get(url: string) {
    return this.http.get(this.baseurl + url);
  }

  edit(url:string){
    return this.http.get(this.baseurl + url)
  }

  post(url: string, data: any) {
    return this.http.post(this.baseurl + url, data);
  }

  put(url: string, data: any) {
    return this.http.put(this.baseurl + url, data);
  }

  delete(url: string) {
    return this.http.delete(this.baseurl + url);
  }

}
