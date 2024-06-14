import { Routes } from '@angular/router';
import {FilmdetailsComponent} from "./components/filmdetails/filmdetails.component";
import {FilmlistComponent} from "./components/filmlist/filmlist.component";
import {BucketComponent} from "./components/cart/bucket.component";

export const routes: Routes = [
  { path: 'films', component: FilmlistComponent },
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'detail/:id', component: FilmdetailsComponent },
  { path: 'cart', component: BucketComponent}
];
