import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import {CardComponent}  from './card/card.component'

@Component({
  selector: 'app-root',
  imports: [CommonModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'cards';
  posts = [
    {
    title:'Neat Tree',
    username:'nature',
    imageUrl: 'assets/tree.jpeg',
    content :'I saw this neat tree today'
  },
  {
    title:'Snowy Mountain',
    imageUrl: 'assets/mountain.jpeg',
    username:'mountainlover',
    content :'Here is the picture of snowy mountain.'
  },
  {
    title:'Bike Hiking',
    username: 'bikelover',
    imageUrl: 'assets/biking.jpeg',
    content :'I have amazing bikes'
  },
]
}
