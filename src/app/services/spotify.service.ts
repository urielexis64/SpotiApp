import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class SpotifyService {
    constructor(private _http: HttpClient) {}

    token =
        'Bearer BQCFrcYlwKdCO1aa4Q03NCtSh5ASo8hinjR-2nLxHnibweVCJTOCoaV62aimSplAe3AaedMLrtzUGy0jHtE';

    getQuery(query: string): Observable<any> {
        const URL = `https://api.spotify.com/v1/${query}`;
        const headers = new HttpHeaders({
            Authorization: this.token,
        });

        return this._http.get(URL, { headers });
    }

    getNewReleases(): Observable<any> {
        return this.getQuery('browse/new-releases?limit=20').pipe(
            map((data) => data['albums'].items)
        );
    }

    getArtists(term: string): Observable<any> {
        return this.getQuery(`search?q=${term}&type=artist&limit=25`).pipe(
            map((data) => data['artists'].items)
        );
    }

    getArtist(id: string) {
        return this.getQuery(`artists/${id}`);
    }

    getTopTracks(id: string) {
        return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
            map((topTracks) => topTracks.tracks)
        );
    }
}
