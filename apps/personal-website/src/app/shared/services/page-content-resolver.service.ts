import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Page } from '../models/page.model';
import { PageContentService } from './page-content.service';

@Injectable({
  providedIn: 'root'
})
export class PageContentResolverService implements Resolve<Page> {

  constructor(
    private contentService: PageContentService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Page | null> {
    const pageTitle = route.routeConfig.path;

    return this.contentService.getPageContent(pageTitle).catch(err => {
      this.router.navigate(['/page-not-found']);
      return null;
    });
  }
}
