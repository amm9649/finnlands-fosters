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
      { label: 'Contact Us', routerLink: 'contact' }
    ]
  }

}
