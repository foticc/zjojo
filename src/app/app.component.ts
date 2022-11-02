import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT_LANG, I18N_LANGUAGES } from '../config/language-config';
import * as NProgress from 'nprogress';

@Component({
  selector: 'da-app',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  currentLang = localStorage.getItem('lang') || window.navigator.language.toLowerCase() || DEFAULT_LANG;
  constructor(private translate: TranslateService) {
    NProgress.configure({ showSpinner: false });
    this.translate.addLangs(I18N_LANGUAGES);
    translate.setDefaultLang(DEFAULT_LANG);
    translate.use(this.currentLang);
  }
}
