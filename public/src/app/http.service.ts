import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts() {
    let obs = this._http.get('api/products');
    obs.subscribe(data => console.log('success', data));
    return this._http.get('/api/products');
  }
  getOneProduct(product_id) {
    return this._http.get(`/api/products/${product_id}`);
  }
  addProduct(new_product) {
    console.log(new_product);
    return this._http.post('/api/products', new_product);
  }
  updateProduct(udpated_product, id) {
    return this._http.put(`/api/products/${id}`, udpated_product);
  }
  deleteProduct(id: any) {
    console.log(id);
    return this._http.delete(`/api/products/${id}`);
  }

}
