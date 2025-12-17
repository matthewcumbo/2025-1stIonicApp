import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone:false
})
export class ProfilePage implements OnInit {

  public username = "";
  public name = "";
  public surname = "";
  public theme = "";
  public themes:any[] = [
    {id:"l", name:"Light Theme"},
    {id:"d", name:"Dark Theme"},
  ];

  public fg = new FormGroup({
    username: new FormControl(),
    name: new FormControl(),
    surname: new FormControl(),
    theme: new FormControl(),
  });


  constructor(private storage:Storage) { }

  async ngOnInit() {
    await this.storage.create();
    await this.load();
  }

  async save(){
    this.username = this.fg.controls.username.value;
    this.name = this.fg.controls.name.value;
    this.surname = this.fg.controls.surname.value;
    this.theme = this.fg.controls.theme.value;

    // console.log("username:"+this.username+". name:"+this.name+". surname:"+this.surname);

    await this.storage.set("username",this.username);
    await this.storage.set("name",this.name);
    await this.storage.set("surname",this.surname);
    await this.storage.set("theme",this.theme);

    this.toggleDarkTheme();
  }

  async load(){
    this.username = await this.storage.get("username");
    this.name = await this.storage.get("name");
    this.surname = await this.storage.get("surname");
    this.theme = await this.storage.get("theme");
    console.log(this.theme);

    this.toggleDarkTheme();
  }

  toggleDarkTheme(){
    document.documentElement.classList.toggle("ion-palette-dark", this.theme=="d"?true:false);

    // the above contains a shorthand condition in the parameters. the whole like is exactly the same as all the below.

    // if(this.theme == "d"){
    //   document.documentElement.classList.toggle("ion-palette-dark", true);
    // }else{
    //   document.documentElement.classList.toggle("ion-palette-dark", false);
    // }
  }


}
