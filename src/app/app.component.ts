import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  itemsTitles = [
    'Category',
    'Items',
    'Gl code',
    'Amount',
    'Sales tax',
    'Total'
  ]

  localItems = [
    {
      id: 1,
      name: 'Category 1',
      items: [{
        id: 1,
        name: 'asdddasd',
        glcode: null,
        amount: null,
        salesTax: null,
      }]
    },
    {
      id: 2,
      name: 'Category 2',
      items: [{
        id: 2,
        name: 'asd54654ddasd',
        glcode: null,
        amount: null,
        salesTax: null,
      }]
    }
  ]

  salesTaxArray = [
    {id: 1, title: 'No tax', value: 0}, 
    {id: 2, title: 'RU', value: 13},
  ]

  submitForm(myForm: NgForm) {
    console.log(myForm)
  }
}
