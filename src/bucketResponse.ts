import {Bucket} from "./bucket";

export class BucketResponse {

  bucketList: Bucket[];
  priceAll: number;

  constructor(bucketList: Bucket[], priceAll: number) {
    this.bucketList = bucketList;
    this.priceAll = priceAll;
  }
}
