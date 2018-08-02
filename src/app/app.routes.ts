import { RouterModule, Routes } from '@angular/router';
//aqui lo importamos
import {AuthGuardService} from './services/auth-guard.service';

import {HomeComponent} from './components/home/home.component';
import {PreciosComponent} from './components/precios/precios.component';
import {ProtegidaComponent} from './components/protegida/protegida.component';
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PreciosComponent },
  {
    path: 'protegida',
    component: ProtegidaComponent,
    //AQui ponemos el service auth-AuthGuardService para que valide que no pueda entrar a esa pagina
    canActivate: [AuthGuardService]
    },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
