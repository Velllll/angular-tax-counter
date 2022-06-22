import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // alternative way to create reactive form
  // myForm!: FormGroup
  // constructor(private FormBuilder: FormBuilder) {
  //   this.myForm = this.FormBuilder.group({
  //     name: [''],
  //     age: ['22'],
  //     job: ['']
  //   })
  // }

  constructor() { }

  ngOnInit(): void {
  }

  myForm: FormGroup = new FormGroup({
    name: new FormControl('Ilya'),
    age: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
    job: new FormControl(''),
  })

  submitForm() {
    console.log(this.myForm)
  }
}
