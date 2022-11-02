import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', routerLink: 'home' },
      { label: 'How to Help', routerLink: 'how-to-help' },
      { label: 'Contact Us', routerLink: 'contact' },
      { label: 'Login', routerLink: 'account/login', visible: true }, // visible when not logged in
      { label: 'Register', routerLink: 'account/register' }, // visible when not logged in
      { label: 'Logout', routerLink: 'account/logout', visible: false } // visible when logged in
    ]
  }

}
