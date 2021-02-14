import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap, pluck } from 'rxjs/operators';
import { Page } from '../../shared/models/page.model';

@Component({
  selector: 'portfolio-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {

  page$: Observable<Page>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.page$ = this.route.data.pipe(
      pluck('page')
    );
  }

}
