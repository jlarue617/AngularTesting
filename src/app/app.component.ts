import { Component } from '@angular/core';

import { Customer } from "./model";

@Component({
  selector: 'app-root',
  template:`
    <h1>{{title}}</h1>
    <customer-list></customer-list>
  `
})

export class AppComponent {
  title: 'Customer Management';
}
