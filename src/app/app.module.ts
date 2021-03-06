import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EbayComponent } from './components/ebay/ebay.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


import {InventarioService} from './service/inventario.service';
import {EbayService} from './service/ebay.service';
import {ScrapeService} from './service/scrape.service';
import {TokenInterceptorService} from './service/token-interceptor.service';

import { InventarioComponent } from './components/ebay/inventario/inventario.component';
import { PedidosComponent } from './components/ebay/inventario/pedidos.component';
import { DatosComponent } from './components/ebay/inventario/datos.component';


import { MaterialModule } from './material/material.module'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EbayComponent,
    NavbarComponent,
    InventarioComponent,
    PedidosComponent,
    DatosComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule
  
  ],
  providers: [
    ScrapeService,
    EbayService,
    TokenInterceptorService,
    InventarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
