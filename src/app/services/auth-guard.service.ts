import { Injectable } from '@angular/core';
import { Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanActivate } from '@angular/router';
import { AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor( private auth: AuthService ) {  }
  //va ha recibir otra pagina se le pone next:ActivatedRouteSnapshot
  canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot){

    console.log(next);
    //AQui hago la validacion de que si el esta autenticado
    //para si si que se le active la ventana protegida
    if( this.auth.isAuthenticated()){
      console.log("Paso el guard")
      return true;
    }else{
      //si no pues para que la ventana protegida siga bloqueada
      console.error("Bloqueado por el guard");
      return false;
    }

  }
}
