import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  header = "Capital Cities";
  list = [
    {
      country:"Malta",
      city:"Valletta"
    },
    {
      country:"England",
      city:"London"
    },
    {
      country:"Italy",
      city:"Rome"
    },
    {
      country:"France",
      city:"Paris"
    }
  ];

  constructor() {}

}
