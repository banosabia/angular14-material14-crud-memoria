import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: 'sarandonga', nombre: 'Sara', apellido: 'Ndonga', sexo: 'M'},
    {usuario: 'picapiedra', nombre: 'Pedro', apellido: 'Picapiedra', sexo: 'H'},
    {usuario: 'marmol', nombre: 'Pablo', apellido: 'Mármol', sexo: 'H'},
    {usuario: 'acamiones', nombre: 'Armando', apellido: 'Camiones', sexo: 'H'},
    {usuario: 'fdomador', nombre: 'Fernando', apellido: 'Mador', sexo: 'H'},
    {usuario: 'otromas', nombre: 'Otro', apellido: 'Más', sexo: 'H'},
  ];

  constructor() { }

  getUsuarios() {
    return this.listUsuarios.slice();
  }

  getUsuario(id: string): Usuario {
    return this.listUsuarios[parseInt(id)];
  }

  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1);
  }

  nuevoUsuario(usuario: Usuario) {
    this.listUsuarios.unshift(usuario);
  }

  editarUsuario(id: string, usuario: Usuario) {
    this.listUsuarios[parseInt(id)] = usuario;
  }
}
