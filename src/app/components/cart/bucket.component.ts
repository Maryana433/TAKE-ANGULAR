import {Component} from '@angular/core';
import {BucketServiceService} from "../../../bucket-service.service";
import {BucketResponse} from "../../../bucketResponse";
import {CurrencyPipe, DatePipe} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './bucket.component.html',
  styleUrl: './bucket.component.css'
})
export class BucketComponent {

  bucketResponse!: BucketResponse;


  constructor(
    private bucketService: BucketServiceService
  ) {
  }


  getBucket(): void {
    this.bucketService.getBuckets().subscribe(buckets => this.bucketResponse = buckets);

  }


  ngOnInit() {
    this.getBucket();
  }


  delete(id: number) {
    this.bucketResponse.bucketList = this.bucketResponse.bucketList.filter(s => s.id !== id);
    this.bucketService.deleteBucket(id);
    this.calculateTotalPrice();

  }

  private calculateTotalPrice(): void {
    const totalPrice = this.bucketResponse.bucketList.reduce((acc, item) => acc + item.qty * item.price, 0);
    this.bucketResponse.priceAll = totalPrice;
  }
}
