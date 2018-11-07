import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1>{{name}}</h1>
  <p><i>{{name}} is at {{street}} in {{city}} in the {{region}} region.</i></p>
  <br />
<fieldset>
  <label>Name: </label><br />
  <input [(ngModel)]="name"><br />
  </fieldset>

  <label><input type="checkbox" [(ngModel)]="hideAddress" /> Hide Address  </label>
  <div [hidden]="hideAddress">
  <fieldset>
    <label>Street:
    <input [(ngModel)]="street">
    </label>
  </fieldset>
  <fieldset>
    <label>City:
    <input [(ngModel)]="city">
    </label>
  </fieldset>
  <fieldset>
    <label>Region: </label>
    <select [(ngModel)]="region">
    <option>north</option>
      <option>south</option>
      <option>east</option>
      <option>west</option>
    </select>
  </fieldset>
  </div>


  `
})
export class AppComponent {
  name = 'Alex Smith';
  city = 'Boston';
  street = '25 Main st';
  region = 'north';
  hideAddress = false;
}
