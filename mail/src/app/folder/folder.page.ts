import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: false,
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  statusList = ["unread","read","sent","favourites","archived","deleted","spam"];
  iconList = ["mail","mail-open","paper-plane","heart","archive","trash","warning"];

  emailList = [
    {
      id:1,
      subject:"Subject for Email 1",
      from:"hello@gmail.com",
      fromName:"Joe Borg",
      message:"This is the full email message from Joe Borg.",
      status:0,
      icon:0
    },
    {
      id:2,
      subject:"Oh hi Mark",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:0,
      icon:0
    },
    {
      id:3,
      subject:"Your inheritance",
      from:"claimyourinheritance@gmail.com",
      fromName:"Claim Your Inheritance Co.Ltd.",
      message:"Hello, I am a Nigerian Prince who collects inheritance. You have inherited €3,000,000.........",
      status:6,
      icon:6
    },
    {
      id:4,
      subject:"More Mails",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:1,
      icon:1
    },
    {
      id:5,
      subject:"More Mails",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:3,
      icon:3
    },
    {
      id:5,
      subject:"More Mails",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:4,
      icon:4
    },
    {
      id:6,
      subject:"More Mails",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:3,
      icon:3
    },
    {
      id:7,
      subject:"More Mails",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:2,
      icon:2
    },
    {
      id:8,
      subject:"More Mails",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:5,
      icon:5
    },
    {
      id:9,
      subject:"More Mails",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:4,
      icon:4
    },
    {
      id:10,
      subject:"More Mails",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:1,
      icon:1
    },
    {
      id:11,
      subject:"More Mails",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:6,
      icon:6
    },
    {
      id:12,
      subject:"More Mails",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:4,
      icon:4
    },
    {
      id:13,
      subject:"More Mails",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:2,
      icon:2
    },
    {
      id:14,
      subject:"More Mails",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:0,
      icon:0
    },
    {
      id:15,
      subject:"More Mails",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:6,
      icon:6
    },
    {
      id:16,
      subject:"More Mails",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:1,
      icon:1
    },
    {
      id:17,
      subject:"More Mails",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:2,
      icon:2
    },
    {
      id:18,
      subject:"More Mails",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:4,
      icon:4
    },
    {
      id:19,
      subject:"More Mails",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:3,
      icon:3
    },
    {
      id:20,
      subject:"More Mails",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:0,
      icon:0
    },
    {
      id:21,
      subject:"More Mails",
      from:"jason@gmail.com",
      fromName:"Jason Derulo",
      message:"hello, can you help me pls??",
      status:5,
      icon:5
    },
  ];

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
