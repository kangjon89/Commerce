import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  { path: "products", component: HomeComponent },
  { path: "products/new", component: NewComponent },
  { path: "products/:id", component: DetailsComponent },
  { path: "products/:id/edit", component: UpdateComponent },
  { path: "", pathMatch: "full", redirectTo: "/products" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
