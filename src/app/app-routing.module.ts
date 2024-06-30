import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginInicioComponent } from './login-inicio/login-inicio.component';
import { InicioHomeComponent } from './inicio-home/inicio-home.component';
import { LibrosComponent } from './libros/libros.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { CarritoAlquilerComponent } from './carrito-alquiler/carrito-alquiler.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LibrosAlquiladosComponent } from './libros-alquilados/libros-alquilados.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { LisempleadoComponent } from './lisempleado/lisempleado.component';
import { LisautorComponent } from './lisautor/lisautor.component';
import { LiscargoComponent } from './liscargo/liscargo.component';
import { LiscategoriaComponent } from './liscategoria/liscategoria.component';
import { LiseditorialComponent } from './liseditorial/liseditorial.component';
import { LislibroComponent } from './lislibro/lislibro.component';
import { LisusuarioComponent } from './lisusuario/lisusuario.component';
import { GuardarempleadoComponent } from './guardarempleado/guardarempleado.component';
import { GuardarautorComponent } from './guardarautor/guardarautor.component';
import { GuardarcargoComponent } from './guardarcargo/guardarcargo.component';
import { GuardarcategoriaComponent } from './guardarcategoria/guardarcategoria.component';
import { GuardareditorialComponent } from './guardareditorial/guardareditorial.component';
import { GuardarlibroComponent } from './guardarlibro/guardarlibro.component';
import { GuardarusuarioComponent } from './guardarusuario/guardarusuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginInicioComponent },
  { path: 'inicio', component: InicioHomeComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'libros/searchbar/:consulta', component: LibrosComponent },
  { path: 'compras', component: CarritoComprasComponent },
  { path: 'alquiler', component: CarritoAlquilerComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'librosalquilados', component: LibrosAlquiladosComponent },
  { path: 'mantenimiento', component: MantenimientoComponent },

  { path: 'lisempleado', component: LisempleadoComponent },
  { path: 'lisautor', component: LisautorComponent },
  { path: 'liscargo', component: LiscargoComponent },
  { path: 'liscategoria', component: LiscategoriaComponent },
  { path: 'liseditorial', component: LiseditorialComponent },
  { path: 'lislibro', component: LislibroComponent },
  { path: 'lisusuario', component: LisusuarioComponent },

  { path: 'guardarempleado', component: GuardarempleadoComponent },
  { path: 'guardarautor', component: GuardarautorComponent },
  { path: 'guardarcargo', component: GuardarcargoComponent },
  { path: 'guardarcategoria', component: GuardarcategoriaComponent },
  { path: 'guardareditorial', component: GuardareditorialComponent },
  { path: 'guardarlibro', component: GuardarlibroComponent },
  { path: 'guardarusuario', component: GuardarusuarioComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
