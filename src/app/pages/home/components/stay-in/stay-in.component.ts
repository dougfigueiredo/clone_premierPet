import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/card/card.component';
import { CardStayComponent } from '../../../../shared/card-stay/card-stay.component';

@Component({
  selector: 'app-stay-in',
  standalone: true,
  imports: [CardStayComponent],
  templateUrl: './stay-in.component.html',
  styleUrl: './stay-in.component.scss'
})
export class StayInComponent {

}
