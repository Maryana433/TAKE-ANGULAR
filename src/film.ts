export class Film {
  id?: number;
  title: string;
  yearOfProduction: number;
  cost: number;
  category:string;


  constructor(id: number, title: string, yearOfProduction: number,
              cost: number,category: string ) {
    this.id = id;
    this.title = title;
    this.yearOfProduction = yearOfProduction;
    this.cost = cost;
    this.category = category;
  }
}
