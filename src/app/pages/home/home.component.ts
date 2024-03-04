import { Component } from '@angular/core';
import { HomeHelloComponent } from './components/home-hello/home-hello.component';
import { QuickAcessComponent } from './components/quick-acess/quick-acess.component';
import { NewsComponent } from './components/news/news.component';
import { StayInComponent } from './components/stay-in/stay-in.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHelloComponent, QuickAcessComponent, NewsComponent, StayInComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
