import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FilmsService} from "../../../filmservice.service";
import {FilmDetails} from "../../../filmDetails";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-filmdetails',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './filmdetails.component.html',
  styleUrl: './filmdetails.component.css'
})
export class FilmdetailsComponent {

  film?: FilmDetails;

  constructor(
    private route: ActivatedRoute,
    private filmsService: FilmsService
  ) {
  }


  getFilmDetails(): void {
    const pathId = this.route.snapshot.paramMap.get('id');
    if (pathId) {
      this.filmsService.getFilmDetails(+pathId)
        .subscribe(film => this.film = film);
    }
  }


  ngOnInit() {
    this.getFilmDetails();
  }

}
