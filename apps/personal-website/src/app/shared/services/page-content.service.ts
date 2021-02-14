import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Page } from '../models/page.model';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PageContentService {

  constructor() { }

  /**
   * 
   * @param title 
   */
  getPageContent(title: string): Promise<Page> {
    return firebase.database().ref(`/pages/${title}`).once('value').then((snapshot) => {
      const page = snapshot.val();

      if (page.bluf && !Array.isArray(page.bluf)) {
        page.bluf = [].concat(page.bluf);
      }

      if (page.content && !Array.isArray(page.content)) {
        page.content = [].concat(page.content);
      }

      return page;
    });
  }
}
