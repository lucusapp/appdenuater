import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ScrapeService } from '../../service/scrape.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { EbayService } from 'src/app/service/ebay.service';

@Component({
  selector: 'app-producto',
  templateUrl: './ebay.component.html',

})
export class EbayComponent {


  constructor(private ebayService:EbayService) {
    // this.ebayService.getInventario()
    //     .subscribe ( resp=>{
    //       console.log(resp);
    //     })

    
  }


}

