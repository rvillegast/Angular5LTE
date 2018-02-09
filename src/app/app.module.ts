import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Rutas
import {APP_ROUTING} from './app.routes';

//Servicios



//Componentes
import { AppComponent } from './app.component';
import { ConnersComponent } from './components/tests/conners/conners.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { SettingsComponent } from './components/shared/settings/settings.component';
import { PerfilSensorialComponent } from './components/tests/perfil-sensorial/perfil-sensorial.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnersComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    SettingsComponent,
    PerfilSensorialComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
