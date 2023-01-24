import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { InformesComponent } from './informes/informes.component';
import { DashboardComponent } from './dashboard.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { DialogoConfirmarComponent } from './dialogo-confirmar/dialogo-confirmar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    UsuariosComponent,
    InformesComponent,
    CrearUsuarioComponent,
    DialogoConfirmarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
