import { routes } from './../../app.routes';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../model/Cliente';
import { RegistarService } from './../../service/Registrar/registar.service';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registrar',
  imports: [
    FormsModule
],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.scss'
})
export class RegistrarComponent {

  cliente : Cliente = new Cliente();

  constructor(
    private RegistarService: RegistarService,
    private router:Router
  ) { }

  registrar(){
    this.RegistarService.registrar(this.cliente).subscribe({
      next: data => this.router.navigate(["/login"]),
      error: err => alert("Usuario ya existe")
    });
  }
}


