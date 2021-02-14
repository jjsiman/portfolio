import { Component, Input, OnInit } from '@angular/core';
import { fadeUpInAnimation } from '../../animations/fadeUpIn';
import { Page } from '../../models/page.model';

@Component({
  selector: 'portfolio-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.scss'],
  animations: [fadeUpInAnimation]
})
export class TextCardComponent implements OnInit {

  @Input() page: Page;

  constructor() { }

  ngOnInit(): void {
  }

}
