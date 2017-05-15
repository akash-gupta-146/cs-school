import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Configuration {

  public url: string = "https://yugma.ind-cloud.everdata.com";
  public baseUrl: string = "https://yugma.ind-cloud.everdata.com/";
  public Server: string = "https://yugma.ind-cloud.everdata.com/";

  userId; 
  access_token: string;
  role: string;
  headers;
  options;
  

  constructor() {
  }

  // set access_token after user login
  setAccessToken() {    
    this.getRole();
  }

  getRole() {
    this.role = localStorage.getItem("role");
    this.getUserId();
  }

  getUserId() {
    this.userId = localStorage.getItem("id");
    this.Server = this.baseUrl + this.role + "/" + this.userId;
  }
}
