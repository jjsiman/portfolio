import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { PageContentResolverService } from './shared/services/page-content-resolver.service';

const routes: Routes = [
  {
    path: 'home',
    component: DefaultPageComponent,
    resolve: {
      page: PageContentResolverService
    }
  },
  {
    path: 'about',
    component: DefaultPageComponent,
    resolve: {
      page: PageContentResolverService
    }
  },
  {
    path: 'projects',
    component: DefaultPageComponent,
    resolve: {
      page: PageContentResolverService
    }
  },
  // {
  //   path: 'contact',
  //   component: ContactComponent
  // },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
