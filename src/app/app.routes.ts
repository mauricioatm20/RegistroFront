import { Routes } from '@angular/router';
import { LoginComponent } from './controller/login/login.component';
import { ConsultarPedidosComponent } from './controller/consultar-pedidos/consultar-pedidos.component';
import { ProcesarPedidoComponent } from './controller/procesar-pedido/procesar-pedido.component';
import { RegistrarComponent } from './controller/registrar/registrar.component';
import { PortadaComponent } from './controller/portada/portada.component';


export const routes: Routes = [
  { path: "", redirectTo: "portada", pathMatch: "full" }, // Redirige la raíz a "portada"
  { path: "portada", component: PortadaComponent },
  { path: "login", component: LoginComponent },
  { path: "consultar", component: ConsultarPedidosComponent },
  { path: "procesar", component: ProcesarPedidoComponent },
  { path: "registrar", component: RegistrarComponent },
];
