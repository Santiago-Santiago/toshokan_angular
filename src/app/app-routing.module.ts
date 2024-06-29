import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginInicioComponent } from './login-inicio/login-inicio.component';
import { InicioHomeComponent } from './inicio-home/inicio-home.component';
import { LibrosComponent } from './libros/libros.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { CarritoAlquilerComponent } from './carrito-alquiler/carrito-alquiler.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LibrosAlquiladosComponent } from './libros-alquilados/libros-alquilados.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'login', component: LoginInicioComponent },
  { path: 'inicio', component: InicioHomeComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'libros/searchbar/:consulta', component: LibrosComponent },
  { path: 'compras', component: CarritoComprasComponent },
  { path: 'alquiler', component: CarritoAlquilerComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'librosalquilados', component: LibrosAlquiladosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
