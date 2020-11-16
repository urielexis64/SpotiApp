import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private _http: HttpClient) {}

  token =
    'Bearer BQCNDQhzoEHBJ3gW_46ueKr6gIUh_c4AjIQaAOWkwFeOXm4uGUJXWjScem3tTIdFui-A4eGf-QHt5ehSdiw';

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: this.token,
    });

    return this._http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers,
    });
  }

  getTracks(term) {
    const headers = new HttpHeaders({
      Authorization: this.token,
    });

    return this._http.get(
      `https://api.spotify.com/v1/search?q=${term}&type=track&limit=25`,
      {
        headers,
      }
    );
  }
}
