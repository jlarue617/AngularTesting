import { Component } from '@angular/core';

import { Customer } from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  customer: Customer = {
    id: 1,
    name: 'Alex Smith',
    address: {
      city: 'Boston',
      street: '25 Main st',
      state: 'California',
      region: 'north'
    }
  };

  hideAddress = false;
}
