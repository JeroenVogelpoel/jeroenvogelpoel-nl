import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public titleService: Title) {
    this.titleService.setTitle("Not set");
  }

  public ScrollToTop(): Boolean {
    document.querySelector("app-root")!.scrollTop = 0;
    return false;
  }

}
