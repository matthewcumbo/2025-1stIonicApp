import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  // These are basic properties that can be used in our HTML 
  first = "Hello there!";
  second = "Bye byeee";

  // The below is an object with its own properties
  person = {
    name:"Matthew",
    surname:"Cumbo",
    age:33
  }
  person2 = {
    name:"Joe",
    surname:"Borg",
    age:101
  }


  constructor() {}



}
