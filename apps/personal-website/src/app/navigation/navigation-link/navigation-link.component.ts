import { Component, Input, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation.component';

@Component({
  selector: 'portfolio-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss']
})
export class NavigationLinkComponent implements OnInit {

  @Input() route: string;
  @Input() icon: string;
  @Input() label: string;

  isHovered = false;

  constructor(
    public parentNav: NavigationComponent
  ) { }

  ngOnInit(): void {
  }

}
