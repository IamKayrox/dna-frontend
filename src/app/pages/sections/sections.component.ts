import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionsComponent { }
