import { Component, Renderer2, inject, ViewChild, ElementRef } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ButtonComponent } from '../button/button.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ButtonComponent, MatIconModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @ViewChild('navbar', { static: false }) navbar!: ElementRef
  renderer2 = inject(Renderer2)

  openMenu() {
    this.renderer2.removeClass(this.navbar.nativeElement, 'navbar-closed')
  }
  closeMenu() {
    this.renderer2.addClass(this.navbar.nativeElement, 'navbar-closed')
  }
}
