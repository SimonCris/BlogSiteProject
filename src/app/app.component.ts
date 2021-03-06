import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogSiteProject';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
    this.translate.setDefaultLang('it');
    const browserLang = this.translate.getBrowserLang();

    if (!!browserLang) {
      this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'it');
    }

  }

}
