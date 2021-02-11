import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'portfolio-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() collapsible: boolean;

  navLinks = [
    {
      route: '/home',
      icon: 'home',
      label: 'Home'
    },
    {
      route: '/about',
      icon: 'person',
      label: 'About me'
    },
    {
      route: '/projects',
      icon: 'inventory_2',
      label: 'Projects'
    },
    // {
    //   route: '/contact',
    //   icon: 'email',
    //   label: 'Contact me'
    // },
  ]

  constructor(
    matIconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/images/linkedin.svg'));
  }

  ngOnInit(): void {
  }

}
