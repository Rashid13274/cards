import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  standalone: true, // Marks the component as standalone
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title ='';
  @Input() username = '';
  @Input() content = '';
  @Input() imageUrl = '';

}
