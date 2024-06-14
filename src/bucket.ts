import {Film} from "./film";

export class Bucket {
  id: number;
  film: Film;
  dateTime: Date;
  qty: number;
  price: number;

  constructor(id: number, film: Film, dateTime: Date, qty: number, price: number) {
    this.id = id;
    this.film = film;
    this.dateTime = dateTime;
    this.qty = qty;
    this.price = price;
  }
}
