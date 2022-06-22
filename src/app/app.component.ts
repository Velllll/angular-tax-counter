import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm!: FormGroup
  constructor(private FormBuilder: FormBuilder) {
    this.myForm = this.FormBuilder.group({
      name: [''],
      age: ['22'],
      job: ['']
    })
  }

  submitForm() {

  }
}
