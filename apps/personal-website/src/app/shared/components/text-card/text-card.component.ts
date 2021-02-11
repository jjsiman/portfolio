import { Component, OnInit } from '@angular/core';
import { fadeUpInAnimation } from '../../animations/fadeUpIn';

@Component({
  selector: 'portfolio-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.scss'],
  animations: [fadeUpInAnimation]
})
export class TextCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
