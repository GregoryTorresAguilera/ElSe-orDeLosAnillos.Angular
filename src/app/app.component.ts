import { NavigatorInterface, FooterInterface } from './core/models/Core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'El Señor De Los Anillos - Json Server';
  public navigator: NavigatorInterface[] = [
    {
      name: "home",
      link: "/home"
    },
    {
      name: "characters",
      link: "/characters"
    },
    {
      name: "movies",
      link: "/movies"
    },
    {
      name: "about",
      link: "/about"
    }
  ];
  public footer: FooterInterface = {
    creator: "Gregory Torres",
    from: "Upgrade Hub"
  }
}
