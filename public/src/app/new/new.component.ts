import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  addedProduct: any;

  constructor(
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this.addedProduct = { name: '', quantity: '', price: '' }
  }

  createProduct(product: string): void {
    let obs = this._httpService.addProduct(product);
    obs.subscribe((data: any) => {
      if (data.message === "success") {
        this.addedProduct = data.results;
        this.goHome();
      }
    });
  }

  goHome(): void {
    this._router.navigate(['']);
  }

}
