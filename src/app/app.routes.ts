import { RouterModule, Routes } from '@angular/router';

//tests
import {ConnersComponent} from './components/tests/conners/conners.component';
import {PerfilSensorialComponent} from './components/tests/perfil-sensorial/perfil-sensorial.component';

const APP_ROUTES: Routes = [
  { path: 'testConners', component: ConnersComponent },
  { path: 'testPerfilSensorial', component: PerfilSensorialComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true} );
