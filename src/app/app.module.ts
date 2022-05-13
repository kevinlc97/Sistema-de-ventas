import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: 'inicio', component: BienvenidoComponent},
  {path: 'prueba', component: PruebaComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    BienvenidoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
