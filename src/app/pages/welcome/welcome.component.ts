import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Entity } from '../../models/welcome.models';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent {
  protected readonly entities: Entity[] = [
    {
      icon: '/assets/logos/logo-dna.jpg',
      contacts: [
        {
          name: 'Alejandra',
          phone: '(+54) 351 3850526',
          email: 'museodnacba@gmail.com',
        },
        {
          name: 'Lina',
          phone: '(+54) 3537 324749',
          email: 'lina.museo.dna@gmail.com',
        }
      ]
    },
    {
      icon: '/assets/logo-protectores.png',
      contacts: [
        {
          name: 'Ian',
          phone: '(+54) 3541 599885',
          email: 'protectores.museodna@gmail.com',
        }
      ]
    },
  ]
}
