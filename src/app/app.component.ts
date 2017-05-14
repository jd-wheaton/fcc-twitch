import { Component } from '@angular/core';
import { StorageService } from './storage.service';
import { TwitchService } from './twitch.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ StorageService, TwitchService ]
})
export class AppComponent {
  title = 'app works!';
  users: User[];
  details: User[];
  game: string;
  logo: string;
  status: string;
  url: string;
  data: any;

  constructor(
    private _storageService: StorageService,
    private _twitchService: TwitchService) {
      this.users = this._storageService.getUsers();
      for ( let i = 0; i < this.users.length; i++ ) {
        this.search(this.users[i].name);
      }
  }

  search(name: any): void {
    this._twitchService
      .searchChannels(name)
      .subscribe((res: any) => this.renderResults(res));
      console.log(name);
  }

  renderResults(res: any): any {
    this.details = null;
    if (res) {
      this.details = res;
      this.data = this.details;
      console.log(this.data);
      return this.data;
    }
  }

}

export class User {
  name: string;
  game?: string;
  logo?: string;
  status?: string;
  url?: string;

  constructor(obj?: any) {
    this.name = obj && obj.name || null;
    this.game = obj && obj.game || null;
    this.logo = obj && obj.logo || null;
    this.status = obj && obj.status || null;
    this.url = obj && obj.url || null;
  }

}
