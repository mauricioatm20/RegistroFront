import { Component } from '@angular/core';
import { LoginService } from '../../service/Login/login.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/Auth/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    CommonModule,
    RouterModule

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {
  usuario: string;
  password: string;

  constructor(
    private loginService: LoginService,
    private authService: AuthService // Inyectamos el servicio compartido
  ) { }

  login() {
    this.loginService.login(this.usuario, this.password).subscribe(data => {
      if (data) {
        this.authService.setCliente(data); // Guarda el usuario autenticado en el servicio
        alert("Usuario autenticado");
      } else {
        alert("Usuario no autenticado");
      }
    });
  }
}
