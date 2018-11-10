import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Customer } from "./model";

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html'
})

export class CustomerDetailComponent {
  @Input() customer: Customer;
  @Output() shift = new EventEmitter<number>();

  showAddress = true;

  right() {
    this.shift.emit(1);
  }

  left() {
    this.shift.emit(-1);
  }
 
}
