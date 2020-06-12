import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
routeId: any;
oneProduct: any;
detail: any;
app: AppComponent;
allProducts: any

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.allProducts = [];
    this.oneProduct = { };
    this.detail = { name: '', quantity: '', price: ''};
    this.getProductsFromService();
    this._route.params.subscribe((params: Params) =>{
      console.log(params["id"]);
      this.routeId = params['id'];
      this.getOneProduct();
    });
  }

  getOneProduct(): void {
    console.log("success")
    let obs = this._httpService.getOneProduct(this.routeId);
    obs.subscribe((data: any) => {
      console.log(data);
      this.oneProduct = data.results;
      this.detail = data.results;
    });
  }

  goHome(): void {
    this._router.navigate(['']);
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

  deleteProduct(id): void {
    let obs = this._httpService.deleteProduct(id);
    obs.subscribe((data:any) => {
      this.getProductsFromService();
    })
  }  

}
