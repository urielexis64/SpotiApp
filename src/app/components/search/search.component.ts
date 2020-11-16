import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  tracks: any[] = [];

  constructor(private _spotify: SpotifyService) {}

  search(input: string) {
    this._spotify.getTracks(input).subscribe((data: any) => {
      this.tracks = data.tracks.items;
      console.log(data);
    });
  }
}
