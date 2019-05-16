import { EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import {Beer} from './beer.model';

export interface BeersState {
  beers: Beer[];
}

export function createInitialState(): BeersState {
  return {
    beers: []
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'beers' })
export class BeersStore extends EntityStore<BeersState, Beer> {
  constructor() {
    super(createInitialState());
  }
}
