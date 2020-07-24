import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  message : string; 
  apivalue:any; 
  constructor(private logService: LogService) {

   }

  ngOnInit(): void {

    this.message = this.logService.sayHello("Lazy Loaded Customer");
    this.apivalue = this.logService.getValue();
  }


}
