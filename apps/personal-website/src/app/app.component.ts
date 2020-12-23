import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SubSink } from 'subsink';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isMobile = false;
  private subsink = new SubSink();

  @ViewChild('sidenav', { read: MatSidenav }) sidenav: MatSidenav;

  @HostBinding('class') class = 'mat-typography';

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
  }

  ngOnInit() {
    // detect mobile breakpoint
    this.subsink.sink = this.breakpointObserver.observe([
      '(max-width: 740px)',
    ]).subscribe(res => {
      this.isMobile = res.matches;
    });

    // when the user navigates on mobile, close the sidenav
    this.subsink.sink = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(_ => {
      if (this.isMobile) {
        this.sidenav.close();
      }
    });
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
}
