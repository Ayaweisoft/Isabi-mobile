import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameGuard implements CanActivate {
  gameLive: any;

  constructor( private router: Router){
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
      this.gameLive = localStorage.getItem('GAMELIVE');
      // console.log('INSIDE live',this.gameLive );
      const admin = 'ADMIN';
      if( this.gameLive !== 'true'){
        this.router.navigateByUrl('/tabs/not-live');
        return false;
   
      }
      return true;
    }
  
}
