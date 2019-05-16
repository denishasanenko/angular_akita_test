import { Component, OnInit } from '@angular/core';
import {BeersQuery} from '../store/beers.query';
import {BeersState, BeersStore} from '../store/beers.store';
import {BeersService} from '../store/beers.service';
import {Observable} from 'rxjs';
import {Beer} from '../store/beer.model';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  public beersList: Observable<Beer[]>;

  constructor(
    private beersQuery: BeersQuery,
    private beersService: BeersService
  ) {}

  ngOnInit() {
    this.beersList = this.beersQuery.selectBeers$;
    this.beersService.getAll();
  }

}
