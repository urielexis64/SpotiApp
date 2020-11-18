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

    error: Error = {
        message: '',
        status: 0,
        ok: true,
    };

    constructor(private spotify: SpotifyService) {
        spotify.getNewReleases().subscribe(
            (data) => {
                this.newReleases = data;
                this.loading = false;
            },
            (err: any) => {
                console.log(err);
                this.error = {
                    message: err.error.error.message,
                    status: err.status,
                    ok: err.ok,
                };
                this.loading = false;
            }
        );
    }
}

interface Error {
    message: string;
    status: number;
    ok: boolean;
}
