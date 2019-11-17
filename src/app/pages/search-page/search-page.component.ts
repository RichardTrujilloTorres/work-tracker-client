import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import algoliasearch from 'algoliasearch/lite';
import {environment} from '../../../environments/environment';

const searchClient = algoliasearch(
    environment.algolia.id,
    environment.algolia.searchKey
);

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  public config = {
    indexName: 'dev_entries',
    searchClient,
    // routing: true
  };
  query: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.query = this.route.snapshot.paramMap.get('query');
  }
}
