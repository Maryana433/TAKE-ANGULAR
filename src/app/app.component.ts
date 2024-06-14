import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FilmlistComponent} from "./components/filmlist/filmlist.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FilmlistComponent, HttpClientModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-web';
}
