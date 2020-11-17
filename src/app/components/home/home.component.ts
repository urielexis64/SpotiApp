import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.components.css'],
})
export class HomeComponent {
    newReleases: any[] = [];

    loading: boolean = true;

    constructor(private spotify: SpotifyService) {
        spotify.getNewReleases().subscribe((data) => {
            this.newReleases = data;
            this.loading = false;
        });
    }
}
