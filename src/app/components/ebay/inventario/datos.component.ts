import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  NgForm
} from "@angular/forms";
import { interproductos } from "src/app/models/termino";
import { InventarioService } from "src/app/service/inventario.service";
import Swal from "sweetalert2";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-datos",
  templateUrl: "./datos.component.html"
})
export class DatosComponent implements OnInit {
  forma: FormGroup;
  producto = new interproductos();
  imagenes = [];
 

  constructor(private inv: InventarioService, private route: ActivatedRoute) {
    this.forma = new FormGroup({
      id: new FormControl(this.producto.id),
      //'accion': new FormControl('Add'),
      titulo: new FormControl(""),
      marca: new FormControl(""),
      precio: new FormControl(""),
      categoria: new FormControl(""),
      caracteristicas: new FormControl(""),
      imagenes: new FormArray([new FormControl("")])
    });
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    
    if (id !== "nuevo") {
      this.inv.getProducto(id).subscribe((resp: interproductos) => {
        this.producto = resp;
        console.log(this.producto);
        this.imagenes= resp.imagenes
        console.log(this.imagenes);
        
        this.producto.id = id;
        this.forma.patchValue(this.producto);

            const pictures = this.forma.get('imagenes') as FormArray;
            console.log(pictures.value);
            while (pictures.length) {
              pictures.removeAt(0);
            }
            console.log(pictures.value);

            resp.imagenes.forEach(picture=>pictures.push(new FormControl(picture)))

            console.log(pictures.value);
      });
      
      
      


    }
  }

  enviar(forma: NgForm) {
    if (this.forma.invalid) {
      console.log("formulario no valido");
      return;
    }

    Swal.fire({
      title: "Espere por favor",
      text: "La información está siendo actualizada",
      type: "info",
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;
    if (this.producto.id) {
      peticion = this.inv.actualizarProducto(this.forma.value);
    } else {
      peticion = this.inv.crearProducto(this.forma.value);
    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.producto.titulo,
        text: "Se actualizó correctamente",
        type: "success"
      });
    });
  }

  agregarImagen() {
    (<FormArray>this.forma.controls["imagenes"]).push(new FormControl(""));
  }
}