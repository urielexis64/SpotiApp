import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.components.css'],
})
export class HomeComponent {
  newReleases: any[] = [];

  constructor(private spotify: SpotifyService) {
    spotify.getNewReleases().subscribe((data: any) => {
      this.newReleases = data.albums.items;
      console.log(this.newReleases);
    });
  }
}
