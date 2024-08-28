import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clinicapp';

  constructor() {
    console.log(this);
    setTimeout(() => {
      console.log(this);
    }, 10000);
  }
}
