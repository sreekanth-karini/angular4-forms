import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <hero-form></hero-form>`,
})

export class AppComponent  { 
	title = 'Angular 4 Forms'; 
}
