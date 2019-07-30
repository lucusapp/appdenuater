import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {EbayComponent} from './components/ebay/ebay.component';
import { InventarioComponent } from './components/ebay/inventario/inventario.component';
import { PedidosComponent } from './components/ebay/inventario/pedidos.component';
import { DatosComponent } from './components/ebay/inventario/datos.component';

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'ebay', component: EbayComponent,
    children:[
      {path :'inventario', component: InventarioComponent},
      {path: 'pedidos',component : PedidosComponent},
      {path: 'datos/:id',component : DatosComponent},
      {path : '**', component: DatosComponent}
    ]
  },
  {path : '', component: HomeComponent},
  {path : '**', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
