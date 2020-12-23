import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private _api = 'https://submit-form.com/yGlBbd7v';
  get api() {
    return this._api;
  }

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Post an email to formspree alias.
   * @param formData 
   */
  postEmail(formData: any): Observable<HttpResponse<string>> {
    return this.http.post(this.api, formData, {
      observe: 'response',
      responseType: 'text'
    });
  }
}
