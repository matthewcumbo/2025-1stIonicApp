import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mail } from '../services/mail';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: false,
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  private mailService = inject(Mail);
  private router = inject(Router);
  constructor() {}

  public statusList: string[] = [];
  public iconList: string[] = [];
  public emailList: any[] = [];

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.folder = this.folder[0].toUpperCase()+this.folder.slice(1);
    this.mailService.filterEmails(this.folder);

    this.statusList = this.mailService.statusList;
    this.iconList = this.mailService.iconList;
    this.emailList = this.mailService.filteredEmailList;

  }

  newMessage(){
    this.router.navigate(['/new-mail']);
  }

  
}
