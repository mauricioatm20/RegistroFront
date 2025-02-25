import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/Cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule} from '@angular/router';
import { AuthService } from '../../service/Auth/auth.service';


@Component({
  selector: 'app-menu',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{

  enabled:boolean=false;
  cliente:Cliente;

  constructor(
    private router:Router,
    private authService:AuthService
  ){}

  ngOnInit(): void {

    this.authService.clientes.subscribe(cliente=>{
      this.enabled=!!cliente;
    })

    this.router.navigate(["/portada"])
  }

}
