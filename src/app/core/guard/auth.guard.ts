import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/Auth.services";


const Auth = new AuthService();

export const AuthGuard: CanActivateFn = () => {
    const token = Auth.getToken();
    const router = inject(Router);
  
    if(token){
      return true;
    } else {
      router.navigate(['auth/login']);
      return false
    }
  };
  


       
    
