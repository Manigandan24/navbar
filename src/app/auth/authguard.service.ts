import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(private authService: AuthService,private router: Router){

    }

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{
        if(!this.authService.isUserLoggedIn('')){
            alert('User being redirected to login page')
            this.router.navigate(['login'],{queryParams: {reDirectUrl:route.url}});
            return false
        }

        return true;
    }
}