import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interproductos } from '../models/termino';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private url = 'https://deniuater.firebaseio.com/'
  id:any

  constructor(private http:HttpClient) { }
  
  
  crearProducto(producto:interproductos){
    return this.http.post(`${this.url}/inventario.json`,producto)
              .pipe(
                map((resp:any)=>{
                  producto.id= resp.name
                  return producto
                })               
              )
            }
  actualizarProducto(producto:interproductos){
    return this.http.put(`${this.url}/inventario/${producto.id}.json`,producto)
   }

  getProducto(id:string){
    return this.http.get(`${this.url}/inventario/${id}.json`)
  }


  getProductos(){
    return this.http.get(`${this.url}/inventario.json`)
              .pipe(map(
                (this.crearArreglo)
              ))
  }

  borrarProducto(id:string){
    return this.http.delete(`${this.url}/inventario/${id}.json`)
  }
  


  private crearArreglo(producObj:object){
    
    const productos:interproductos []=[]
  
       if(producObj === null ) { return []};

       Object.keys(producObj).forEach(key=>{
            const producto:interproductos = producObj[key];
            producto.id = key;          
            productos.push(producto)
          });
    return productos
  }
}