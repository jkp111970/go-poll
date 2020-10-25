import { Component } from '@angular/core';

import { FrameworkConfigService, FrameworkConfigSettings } from '../fw/services/framework-config.service';
import { MenuService  } from '../fw/services/menu.service';

import { initialMentuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gopoll';

  constructor(private frameworkconfigService: FrameworkConfigService, 
    private menuService: MenuService) {

    let config: FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/social-fb-bw.png', alt: 'Facebook', link: 'http://www.facebook.com' },
        { imageFile: 'assets/social-google-bw.png', alt: 'Facebook', link: 'http://www.google.com' },
        { imageFile: 'assets/social-twitter-bw.png', alt: 'Facebook', link: 'http://www.twitter.com' }
      ],
      showLanguageSelector: true,
      showUserControls: true,           
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };
    
    frameworkconfigService.configure(config);
    menuService.items = initialMentuItems;
  }

}
