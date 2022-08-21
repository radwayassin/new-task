import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  defaultLang: string | null | undefined;
  constructor(private translate: TranslateService, private renderer: Renderer2) {
    this.setDefaultLang()
  }
  ngOnInit(): void {
  }
  setDefaultLang() {
    this.defaultLang = window.localStorage.getItem('lang');
    if (this.defaultLang) {
      this.translate.setDefaultLang(this.defaultLang);
      this.translate.use(this.defaultLang);
      if (this.defaultLang === 'ar') {
        this.renderer.addClass(document.body, 'rtl');
      } else {
        this.renderer.removeClass(document.body, 'rtl');
      }
    } else {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
      window.localStorage.setItem('lang', 'en')
    }
  }
  changeLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    window.localStorage.setItem('lang', lang)
    if (lang === 'ar') {
      this.renderer.addClass(document.body, 'rtl');
    } else {
      this.renderer.removeClass(document.body, 'rtl');
    }
  }
}
