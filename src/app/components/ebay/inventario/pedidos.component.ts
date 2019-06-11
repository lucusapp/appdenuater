import { Component, OnInit } from '@angular/core';
import { EbayService } from 'src/app/service/ebay.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styles: []
})
export class PedidosComponent implements OnInit {

  productos:any=[]

  constructor(private ebs:EbayService) { 
    this.ebs.getInventario()
    .subscribe(data=>{
      this.productos = data
     console.log(data);

    })
  }
  ngOnInit() {
  }

}
