import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  entrar() {
    console.log(this.form);
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    console.log(usuario);
    console.log(password);
    if (usuario === 'admin' && password === 'admin123') {
      this.fakeLoading();
    } else {
      this.error();
    }
  }

  error() {
    this._snackBar.open('Usuario / Contraseña incorrecto', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(()=>{
      this.loading = false;
      this.router.navigate(['dashboard']);
    },3000);
  }

}
