import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Mail } from '../services/mail';

@Component({
  selector: 'app-new-mail',
  templateUrl: './new-mail.page.html',
  styleUrls: ['./new-mail.page.scss'],
  standalone:false
})
export class NewMailPage implements OnInit {

  public isToastOpen = false;
  private router = inject(Router);
  private mailService = inject(Mail);

  public fg = new FormGroup({
    subject: new FormControl(),
    from: new FormControl(),
    fromName: new FormControl(),
    message: new FormControl(),
  });

  constructor() { }

  ngOnInit() {
  }

  submitNewEmail(){
    
    let subject = this.fg.controls.subject.value;
    let from = this.fg.controls.from.value;
    let fromName = this.fg.controls.fromName.value;
    let message = this.fg.controls.message.value;
    
    this.mailService.newMail(subject,from,fromName,message);
    
    this.setOpen(true);
  }


  setOpen(isOpen:boolean){
    this.isToastOpen = isOpen;
    if(!isOpen){
      this.router.navigate(["/"]);
    }
  }

}
