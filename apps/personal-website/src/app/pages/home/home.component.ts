import { style, transition, trigger, animate, group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeUpInAnimation } from '../../shared/animations/fadeUpIn';

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeUpInAnimation]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
