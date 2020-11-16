import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private _http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQA-tecZqzHhLBQlUOv6SVkeQjS8Cq1xwktUNZinz26WEapjItoF_iD0AhExR-zH3DHFdE9ynBx4msa6ngY',
    });

    return this._http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers,
    });
  }
}
