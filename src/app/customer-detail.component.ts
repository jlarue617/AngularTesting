import { Component, Input } from '@angular/core';

import { Customer } from "./model";

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html'
})

export class CustomerDetailComponent {
  @Input() customer: Customer;
  showAddress = true;

  regions = ['East', 'South', 'North', 'West', 'Northeast', 'Midwest'];
  states = ['California', 'Jalisco', 'Quebec', 'Illinois'];
}
