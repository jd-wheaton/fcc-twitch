import { Injectable } from '@angular/core';
import { Init } from './app.init';
import { TwitchService } from './twitch.service';

@Injectable()
export class StorageService extends Init {
  constructor() {
    super();
    console.log('StorageService Initialized...');
    this.load();
  }

  getUsers() {
    const users = JSON.parse(localStorage.getItem('users'));
    return users;
  }

  updateData(name, game, logo, status, url) {
    const users = JSON.parse(localStorage.getItem('users'));

    for ( let i = 0; i < users.length; i++ ) {
      if ( name === users[i].name ) {
        users[i].game = game;
        users[i].logo = logo;
        users[i].status = status;
        users[i].url = url;
        localStorage.setItem('users', JSON.stringify(users));
      }
    }
  }
}
