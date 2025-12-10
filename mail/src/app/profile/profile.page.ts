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

  public fg = new FormGroup({
    username: new FormControl(),
    name: new FormControl(),
    surname: new FormControl(),
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

    // console.log("username:"+this.username+". name:"+this.name+". surname:"+this.surname);

    await this.storage.set("username",this.username);
    await this.storage.set("name",this.name);
    await this.storage.set("surname",this.surname);
  }

  async load(){
    this.username = await this.storage.get("username");
    this.name = await this.storage.get("name");
    this.surname = await this.storage.get("surname");
  }


}
