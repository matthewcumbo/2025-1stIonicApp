import { Component, OnInit } from '@angular/core';
// The following imports all the necessary backend angular code that allows us to process the values the user inputs into our form controls
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: false
})
export class Tab4Page implements OnInit {

  // Here we are creating a background property which represents a group of form controls
  // Through it, we can access the values input by the user
formGroup = new FormGroup({
  firstName: new FormControl(),
  lastName: new FormControl(),
  age: new FormControl()
});

firstName="";
lastName="";
age="";

  constructor() { }

  ngOnInit() {
  }

  // The submit function here is a custom function that we created, the name is not reserved within Angular/Ionic
  submit(){
    // The 'this' keyword is used to access any property that is created within 'this class' 
    // Therefore, we can access any property created in this class, including child elements of those properties
    this.firstName = this.formGroup.controls.firstName.value;
    this.lastName = this.formGroup.controls.lastName.value;
    this.age = this.formGroup.controls.age.value;
    // Once the value of a Form Control is added into a property, that will then be available to be used in HTML through interpolation
  }

}
