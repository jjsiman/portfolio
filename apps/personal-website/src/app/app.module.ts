import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationLinkComponent } from './navigation/navigation-link/navigation-link.component';
import { LogoComponent } from './logo/logo.component';
import { FullScreenWrapperComponent } from './shared/components/full-screen-wrapper/full-screen-wrapper.component';
import { FocusTrapComponent } from './shared/components/focus-trap/focus-trap.component';
import { ConstructionComponent } from './shared/components/construction/construction.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ContactComponent,
    NavigationComponent,
    HomeComponent,
    NavigationLinkComponent,
    LogoComponent,
    FullScreenWrapperComponent,
    FocusTrapComponent,
    ConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
