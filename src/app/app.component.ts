import { fadeAnim } from './animation';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnim],
})
export class AppComponent {
  title = 'ASET';
}
