import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  titulo:string = "Portafolio";
  inicio:string="inicio";
  sobre_mi:string="sobre mi";
  proyectos:string="proyectos";
  texto_alternativo:string = "Tu creatividad, mi pasión: descubre un mundo de diseño en mi portafolio web"
}
