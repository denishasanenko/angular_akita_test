import { Injectable } from '@angular/core';
import {BeersStore} from './beers.store';
import {Beer} from './beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private beersStore: BeersStore) { }

  public async getAll() {
    const response = await fetch('/assets/beer.json');
    const beers = <Beer[]> await response.json();
    this.beersStore.update(state => {
      return {
        ...state,
        beers: beers
      };
    });
  }

}
