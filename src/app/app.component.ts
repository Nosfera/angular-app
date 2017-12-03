import { Component } from '@angular/core';

@Component({
  // this is the decorator: a JS object
  // the selector choose where "element"
  // should this view loaded in index.html
  selector: 'app-root',
  // the template url for the Component
  templateUrl: './app.component.html',
  // The styles for this Component
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // this variable is linked to the viewport
  //
  title = 'app works';
}
