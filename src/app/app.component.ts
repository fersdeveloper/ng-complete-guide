import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret: boolean = false;

  onToggleDetails() {
    this.showSecret = !this.showSecret;
  }
}
