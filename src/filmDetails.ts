export class FilmDetails {
  id?: number;
  title: string;
  yearOfProduction: number;
  cost: number;
  category:string;
  plot:string;


  constructor(id: number, title: string, yearOfProduction: number,
              cost: number,category: string, plot: string ) {
    this.id = id;
    this.title = title;
    this.yearOfProduction = yearOfProduction;
    this.cost = cost;
    this.category = category;
    this.plot = plot;
  }
}


// private long id;
// private String title;
// private int yearOfProduction;
// private double cost;
// private String category;
// private String plot;
