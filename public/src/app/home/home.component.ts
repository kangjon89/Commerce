import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allProducts: any;
  newProduct: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.allProducts = [];
    this.newProduct = {};
    this.getProductsFromService();
  }

  getProductsFromService() {
    let obs = this._httpService.getProducts();
    obs.subscribe((data: any) => {
      console.log(data);
      if(data.message == 'success') {
        this.allProducts = data.results;
      }
    });
  }  

}
