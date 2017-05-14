import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TwitchService {
  static BASE_URL = 'https://api.twitch.tv';
  static CLIENT_ID = '7zh2r6wziuhw3jruky9sl9flkgyvmc';

  constructor(public http: Http) { }

  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryURL = `${TwitchService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}${params.join('')}`;
    }

    return this.http.request(queryURL).map((res: any) => res.json());
  }

  search(query: string, type: string): Observable<any[]> {
    return this.query(`/kraken`, [
      `${type}`,
      `${query}`,
      `?client_id=${TwitchService.CLIENT_ID}`
    ]);
  }

  searchStreams(query: string): Observable<any[]> {
    return this.search(query, '/streams/');
  }

  searchChannels(query: string): Observable<any[]> {
    return this.search(query, '/channels/');
  }
}

export const TWITCH_PROVIDERS: Array<any> = [
  { provide: TwitchService, useClass: TwitchService }
];
