import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  editedProduct: any;
  routeId: any;
  oneProduct: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.editedProduct = { name: '', quantity: '', price: '' }
    this.oneProduct = { name: '', quantity: '', price: '' }
    this._route.params.subscribe((params: Params) => {
      console.log(params["id"]);
      this.routeId = params["id"];
      this.getOneProduct();
    });
  }

  getOneProduct(): void {
    console.log("success")
    let obs = this._httpService.getOneProduct(this.routeId);
    obs.subscribe((data: any) => {
      console.log(data);
      this.oneProduct = data.results;
    });
  }

  editProduct(product: string): void {
      console.log(product);
      let obs = this._httpService.updateProduct(product, this.routeId);
      obs.subscribe((data: any) => {
        this.editedProduct = data.results;
        this.goHome();
    })
  }
  
  goHome(): void {
    this._router.navigate(["/"]);
  }

}
