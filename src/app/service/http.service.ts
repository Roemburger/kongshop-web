import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})

export class HttpService {

  public urlStr: string = "https://localhost:8080/";
  //public urlStr: string = "https://kongshop.nl:8080/";

  constructor(
    private http:HttpClient
  ) {}

  public get(url: string) {
    return this.http.get(this.urlStr + url, {
      responseType: 'json'
    });
  }

  public post(url: string, body: Object) {
    return this.http.post(this.urlStr + url, body, {
      responseType: 'json'
    });
  }

  public put(url: string, body: Object) {
    return this.http.put(this.urlStr + url, body, {
      responseType: 'json'
    });
  }

  public delete(url: string) {
    return this.http.delete(this.urlStr + url, {
      responseType: 'json'
    });
  }

}
