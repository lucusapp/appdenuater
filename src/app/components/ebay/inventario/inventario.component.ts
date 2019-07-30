import { Component, OnInit } from '@angular/core';
import { InventarioService } from 'src/app/service/inventario.service';
import { interproductos } from 'src/app/models/termino';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styles: []
})





export class InventarioComponent implements OnInit {
  
  productos: interproductos[]=[]
  
  constructor(private inv:InventarioService) { 
  }
  ngOnInit() {
    this.inv.getProductos()
    .subscribe(resp=>{
      this.productos = resp
    })
    console.log(this.productos);
  }
  borrarProducto(producto:interproductos, i:number){
    
    this.productos.splice(i,1)
    
    this.inv.borrarProducto(producto.id)
    .subscribe()
    
    
  }
  excel(){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, //si se proporciona creará una fila en el encabezado. 
      showTitle: true, //mostrar titulo. Si se proporciona mostrara las cabeceras.
      useBom: false,
      noDownload: false,
      headers: ["First Name", "Last Name", "ID"],
    };
    new Angular5Csv(this.productos,"fileName",options);   
  }
}
