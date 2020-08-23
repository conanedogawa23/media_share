import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from "@angular/http";
// import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/add/operator/map';
// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:Http, private httpReq:HttpClient) {}

  getTestingValue() {
    console.log("in testing value");
    return this.httpReq.get("https://ancient-sea-61683.herokuapp.com/api/metrail");
    
  }

  getTestValue(): string {
    return 'test value';
  }
}
