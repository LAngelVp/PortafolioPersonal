import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Componets/nav-bar/nav-bar.component';
import { NosotrosComponent } from './Componets/nosotros/nosotros.component';
import { HomeComponent } from './Componets/home/home.component';
import { ModalContactoComponent } from './Componets/modal-contacto/modal-contacto.component';
import { RedesSocialesComponent } from './Componets/redes-sociales/redes-sociales.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NosotrosComponent,
    HomeComponent,
    ModalContactoComponent,
    RedesSocialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
