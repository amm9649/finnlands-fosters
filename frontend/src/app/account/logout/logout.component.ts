import { Component, OnInit } from '@angular/core';

import { AccountService } from '@app/_services';

@Component({ templateUrl: './logout.component.html' })
export class LogoutComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    ) {
  }

  ngOnInit(): void {
    this.accountService.isLoggedIn = false;
    this.accountService.logout();
  }

}
