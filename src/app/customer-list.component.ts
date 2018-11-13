import { Component, OnInit } from '@angular/core';

import { Customer } from "./model";
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})

export class CustomerListComponent implements OnInit {
  customer: Customer;
  customers: Customer[];
  isBusy = false;

  constructor (private dataService : DataService, private loggerService: LoggerService) {  }

  ngOnInit() {
   this.getCustomers()
  }

  getCustomers()  {
    this.isBusy = true;
    this.loggerService.log('Getting Customers...');
    this.dataService.getCustomersPromise().then(custs => {
      this.customers = custs;
      this.isBusy = false;
    });
  }
  shift(increment: number){
    let index = this.customers.findIndex(c => c === this.customer ) + increment;
    index = Math.min(this.customers.length - 1, Math.max(0, index));
    this.customer = this.customers[index];
  }
}
