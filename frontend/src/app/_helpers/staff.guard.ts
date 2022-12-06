import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { AccountService } from '@app/_services';

@Injectable({
  providedIn: 'root'
})
export class StaffGuard implements CanActivate { 
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    const user = this.accountService.userValue;
      if (user) {
        if user.permissions.some(p => p === "staff" ){
          return true;
        }
        this.router.navigate(['/permission-denied'], { queryParams: { returnUrl: state.url }});
      }
      this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
      return false;
  }
}
