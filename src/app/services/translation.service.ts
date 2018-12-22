import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Translation } from './translation';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
    constructor(private http: HttpClient) {}

    loadTranslation(translationEndpoint: string): Observable<Translation> {
        return this.http.get(translationEndpoint).pipe(
            map(translation => translation['translateText'])
        );
    }
}
