import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styles: [],
})
export class ArtistComponent {
    artist: any = {};
    topTracks: any[] = [];
    loading: boolean = true;

    constructor(
        private _router: ActivatedRoute,
        private _spotify: SpotifyService
    ) {
        _router.params.subscribe((params) => {
            this.getArtist(params.id);
            this.getTopTracks(params.id);
        });
    }

    getArtist(id: string) {
        this._spotify.getArtist(id).subscribe((artist) => {
            this.artist = artist;
            this.loading = false;
        });
    }

    getTopTracks(id: string) {
        this._spotify.getTopTracks(id).subscribe((topTracks) => {
            this.topTracks = topTracks;
            console.log(this.topTracks);
        });
    }
}
