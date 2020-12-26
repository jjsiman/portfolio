import { style, transition, trigger, animate, group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeUpIn', [
      transition(':enter', [
        style({ transform: 'translateY(50%)', opacity: 0 }),
        group([
          animate('1s ease-out',
            style({ transform: 'translateY(0%)' }),
          ),
          animate('600ms 400ms ease-out',
            style({ opacity: 1 })
          )
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
