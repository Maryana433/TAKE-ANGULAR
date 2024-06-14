import {Component} from '@angular/core';
import {Film} from "../../../film";
import {FilmsService} from "../../../filmservice.service";
import {RouterLink} from "@angular/router";
import {BucketServiceService} from "../../../bucket-service.service";
import {CategoryService} from "../../../category.service";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-filmlist',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './filmlist.component.html',
  styleUrl: './filmlist.component.css'
})
export class FilmlistComponent {


  films!: Film [];
  sortedFilms!: Film [];
  categories!: String[];
  selectedCategory!:String;

  constructor(private filmListService: FilmsService, private bucketService:BucketServiceService, private categoryService:CategoryService) { }


  getFilmsAndCategories(): void {
    this.filmListService.getFilms().subscribe(films => {
      this.films = films
      this.sortedFilms = films
    });

    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
    console.log(this.films)
  }

  ngOnInit(){
    this.getFilmsAndCategories();
  }

  addFilm(filmdId: number | undefined):void{
    this.bucketService.addFilmToBucket(filmdId);
    console.log("Film was added to cart");
    // this.router.navigate(['/cart']);

  }

  setCurrentCategory(category:String){
    this.selectedCategory = category;
  }


  sortFilms(): Film[] {
    // this.sortedFilms = this.films;
    // this.sortedFilms.sort((a, b) => {
    //   if (a.category == b.category) { return 0; }
    //   if (a.category > b.category) { return 1; }
    //   return -1;
    // });

    if(this.selectedCategory!=null && this.selectedCategory!="All"){
      return this.films.filter(f => f.category == this.selectedCategory);
    }
    return this.films;
  }

}
