import { Component, Input } from '@angular/core';
import { StayInComponent } from '../../pages/home/components/stay-in/stay-in.component';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-card-stay',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './card-stay.component.html',
  styleUrl: './card-stay.component.scss'
})
export class CardStayComponent {
  @Input() icon!: string;
  @Input() label!: string;
  @Input() title!: string;
  @Input() text!: string;
}
