import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';

@Component({
  selector: 'app-home-hello',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home-hello.component.html',
  styleUrl: './home-hello.component.scss'
})
export class HomeHelloComponent {

}
