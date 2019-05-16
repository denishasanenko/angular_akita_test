import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import {BeersState, BeersStore} from './beers.store';
import {Beer} from './beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeersQuery extends QueryEntity<BeersState, Beer> {
  selectBeers$ = this.select(state => state.beers);

  constructor(protected store: BeersStore) {
    super(store);
  }

}
