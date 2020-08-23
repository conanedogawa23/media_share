import { Component } from '@angular/core';
import { TestService } from "./services/test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adverts-revenue';

  constructor(private testService: TestService) {}

  ngOnInit() {
    let testValue = this.testService.getTestValue();
    console.log(testValue);
  }

  getValue(){
    let testGetReq = this.testService.getTestingValue().subscribe((data:any)=> {
      console.log(data);
    });
    // console.log(testGetReq);
    // return testGetReq;
  }

}
