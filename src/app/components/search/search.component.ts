import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styles: [],
})
export class SearchComponent {
    artists: any[] = [];
    loading: boolean = false;

    constructor(private _spotify: SpotifyService) {}

    search(input: string) {
        this.loading = true;
        this._spotify.getArtists(input).subscribe((data) => {
            this.artists = data;
            this.loading = false;
            console.log(data);
        });
    }
}
