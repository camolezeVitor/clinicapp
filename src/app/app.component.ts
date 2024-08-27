import { Component } from '@angular/core';
import { Dynamic } from '@decorators';
import { ScreenState } from '@enums/states';
import { windowChangeTest$ } from '@services';

class ComponenteA {};
class ComponenteB {};

@Dynamic<ScreenState>({
  parameter: windowChangeTest$,
  componentTemplates: [
    {
      component: ComponenteA,
      condition: ScreenState.MOBILE
    },
    {
      component: ComponenteB,
      condition: ScreenState.DESKTOP
    },
  ]
})
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
