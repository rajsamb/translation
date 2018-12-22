import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
    title = 'Angular';
    translatedText: string;

    constructor(private http: HttpClient) {
        // Define observable: declaration of a stream
        const translation$: Observable<Response> = http.get('http://translateapi.howtofixthis.com/?sourceLanguage=en&targetLanguage=ta&text=I%20love%20tamil%20typing');


        // Observable only become stream When we subscribe to it
        translation$.subscribe(
            translation => {
                console.log(translation['translateText']);
                this.translatedText = translation['translateText'];

            },
            () => {},
            () => console.log('translation complete')
        );
    }
}
