import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
