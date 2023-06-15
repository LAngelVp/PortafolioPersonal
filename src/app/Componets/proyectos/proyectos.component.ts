import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  texto_baner_proyectos : string = "Sumérgete en el mundo de la programación, donde la lógica y la imaginación se entrelazan en cada línea de código. Disfruto cada desafío, cada solución innovadora y cada proyecto que se convierte en realidad. ¡Programar es mi pasión y mi camino hacia la creación de futuros digitales sorprendentes!"
  titulo_reportes:string='Reportes Excel'
  des_reportes:string='El software realiza reportes'
  titulo_veterinaria:string='Web para veterinaria'
  des_veterinaria:string='Sistema web adaptado a veterinaria INSA'
  texto_titulo_experiencia:string='Experiencia adquirida';
  eslogan_experiencia:string='Toda la experiencia que he adquirido fue en proyectos integradores, ademas de haber participado en proyectos empresariales.'
  eslogan_experiencia2:string='Los proyectos fueron realizados sin ninguna asesoria profesional, todo fue a base de estudio e independencia'
  btn_github:string='Hechar un vistaso'
  direction_github:string="https://github.com/LAngelVp"
  texto_eslogan_proyectos:string="La inquietud que me lleva a realizar proyectos en tecnología, es que, siempre me pregunto, ¿Comó puedo realizar mi tarea de una manera más facil con la ayuda de mis conocimientos de desarrollo?"
}
