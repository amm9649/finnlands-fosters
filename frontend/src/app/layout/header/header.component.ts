import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { AccountService } from '@app/_services';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  loginItems: MenuItem[] = [];
  logoutItems: MenuItem[] = [];
  accountService: AccountService;

  constructor(accountService: AccountService) { this.accountService=accountService }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', routerLink: 'home' },
      { label: 'Adoptables', routerLink: 'adopt' },
      { label: 'Events', routerLink: 'events' },
      { label: 'How to Help', routerLink: 'how-to-help' },
      { label: 'Contact Us', routerLink: 'contact' },
      { label: 'Raffle', routerLink: 'raffle' },
    ];

    this.loginItems = [
      { label: 'Login', routerLink: 'account/login' },
      { label: 'Register', routerLink: 'account/register' },
    ];

    this.logoutItems = [
      { label: 'Profile', routerLink: 'account/profile' },
      { label: 'Adoption Contract', routerLink: 'account/contract' },
      { label: 'Messages', routerLink: 'account/messages' },
      { label: 'Settings', routerLink: 'account/settings' },
      { label: 'Logout', routerLink: 'account/logout' },
    ];
  }
}
