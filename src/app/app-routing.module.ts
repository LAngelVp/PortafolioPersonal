import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componets/home/home.component';
import { NosotrosComponent } from './Componets/nosotros/nosotros.component';
import { ProyectosComponent } from './Componets/proyectos/proyectos.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'home', component: HomeComponent},
  {path : 'nosotros', component: NosotrosComponent},
  {path : 'proyectos', component: ProyectosComponent},
  {path : 'nosotros', component: NosotrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
