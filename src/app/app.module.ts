import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { ReactiveFormsModule, Validators } from '@angular/forms'; // Importa ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginInicioComponent } from './login-inicio/login-inicio.component';
import { InicioHomeComponent } from './inicio-home/inicio-home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LibrosComponent } from './libros/libros.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { CarritoAlquilerComponent } from './carrito-alquiler/carrito-alquiler.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LibrosAlquiladosComponent } from './libros-alquilados/libros-alquilados.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarEmpleadoComponent } from './navbar-empleado/navbar-empleado.component';
import { LisempleadoComponent } from './lisempleado/lisempleado.component';
import { LisusuarioComponent } from './lisusuario/lisusuario.component';
import { LislibroComponent } from './lislibro/lislibro.component';
import { LisautorComponent } from './lisautor/lisautor.component';
import { LiscargoComponent } from './liscargo/liscargo.component';
import { LiscategoriaComponent } from './liscategoria/liscategoria.component';
import { LiseditorialComponent } from './liseditorial/liseditorial.component';
import { GuardarempleadoComponent } from './guardarempleado/guardarempleado.component';
import { GuardarusuarioComponent } from './guardarusuario/guardarusuario.component';
import { GuardarlibroComponent } from './guardarlibro/guardarlibro.component';
import { GuardarautorComponent } from './guardarautor/guardarautor.component';
import { GuardarcargoComponent } from './guardarcargo/guardarcargo.component';
import { GuardareditorialComponent } from './guardareditorial/guardareditorial.component';
import { GuardarcategoriaComponent } from './guardarcategoria/guardarcategoria.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginInicioComponent,
    InicioHomeComponent,
    NavbarComponent,
    LibrosComponent,
    CarritoComprasComponent,
    CarritoAlquilerComponent,
    NosotrosComponent,
    LibrosAlquiladosComponent,
    MantenimientoComponent,
    NavbarEmpleadoComponent,
    LisempleadoComponent,
    LisusuarioComponent,
    LislibroComponent,
    LisautorComponent,
    LiscargoComponent,
    LiscategoriaComponent,
    LiseditorialComponent,
    GuardarempleadoComponent,
    GuardarusuarioComponent,
    GuardarlibroComponent,
    GuardarautorComponent,
    GuardarcargoComponent,
    GuardarcategoriaComponent,
    GuardareditorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }), // ToastrModule added
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
