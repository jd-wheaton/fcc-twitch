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
}
