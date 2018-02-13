import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['English', 'Kannada']);
    translate.setDefaultLang('English');

    //let browserLang = translate.getBrowserLang();
   // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
  add(ele: HTMLAnchorElement) {
    // console.log('hovered');
    ele.classList.add('text-dark');
  }
  remove(ele: HTMLAnchorElement) {
    ele.classList.remove('text-dark');
  }
}
