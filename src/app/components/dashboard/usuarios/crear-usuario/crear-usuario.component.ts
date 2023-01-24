import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  sexo: any[] = [{id:'H', desc: 'Hombre'}, {id:'M', desc: 'Mujer'}];
  form: FormGroup;
  id: string | null;
  titulo: String = 'Crear Usuario';

  constructor(private fb: FormBuilder, 
              private _usuarioService: UsuarioService, 
              private router: Router, 
              private _snackBar: MatSnackBar,
              private activatedRoute: ActivatedRoute) {

    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    console.log('id='+this.id);
   }

  ngOnInit(): void {
    this.esEditar();
  }

  aceptar() {
    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo
    };

    if(this.id) {
      this._usuarioService.editarUsuario(this.id, user);
    } else {
      this._usuarioService.nuevoUsuario(user);
    }

    this.router.navigate(['/dashboard/usuarios']);
    this._snackBar.open('Usuario ' + (this.id ? 'modificado' : 'creado') + ' correctamente', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  getImagen() {
    return this.form.value.sexo == 'H' ? 'assets/img/hombre.png' : 'assets/img/mujer.png';
  }

  esEditar() {
    if(this.id) {
      this.titulo = 'Editar Usuario';
      const usr: Usuario = this._usuarioService.getUsuario(this.id);
      this.form.setValue({
        usuario: usr.usuario,
        nombre: usr.nombre,
        apellido: usr.apellido,
        sexo: usr.sexo
      });
    }
  }

}
