import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslationService } from '../services/translation.service';
import { Translation } from '../services/translation';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
    title = 'Angular';
    translatedText: Translation;

    constructor(
        private http: HttpClient,
        private translationService: TranslationService
    ) {
        const translation$ = this.translationService.loadTranslation('http://translateapi.howtofixthis.com/?sourceLanguage=en&targetLanguage=ta&text=I%20love%20tamil%20typing');

        translation$.subscribe(
            translation => this.translatedText = translation,
            () => {},
            () => console.log('translation complete!!')
        );

        /**
         * All in one without using translation service:
         * // Define observable: declaration of a stream
         * const translation$: Observable<Response> = http.get('http://translateapi.howtofixthis.com/?sourceLanguage=en&targetLanguage=ta&text=I%20love%20tamil%20typing');
         *
         * // Observable only become stream When we subscribe to it
         * translation$.subscribe(
         *     translation => this.translatedText = translation['translateText'],
         *     () => {},
         *     () => console.log('translation complete')
         * );
         */
    }
}
