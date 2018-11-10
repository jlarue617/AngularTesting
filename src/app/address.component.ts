import { Component, Input } from "@angular/core";

import { Address } from "./model";

@Component({
  selector:'address-comp',
  templateUrl:'./address.component.html'
})

export class AddressComponent {
  @Input() address: Address;
  regions = ['East', 'South', 'North', 'West', 'Northeast', 'Midwest'];
  states = ['California', 'Jalisco', 'Quebec', 'Illinois'];
}
