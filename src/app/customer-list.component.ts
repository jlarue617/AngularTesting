import { Component, OnInit } from '@angular/core';

import { Customer } from "./model";
import { DataService } from './data.service';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})

export class CustomerListComponent implements OnInit {
  customer: Customer;
  customers: Customer[];

  constructor (private dataService : DataService) {  }

  ngOnInit() {
    this.customers = this.dataService.getCustomers();
  }

  shift(increment: number){
    let index = this.customers.findIndex(c => c === this.customer ) + increment;
    index = Math.min(this.customers.length - 1, Math.max(0, index));
    this.customer = this.customers[index];
  }
}
