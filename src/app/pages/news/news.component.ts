import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Post } from '../../models/home.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DatePipe,
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent {
  protected posts: Post[] = [
    {
      title: 'Lorem ipsum dolor',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra et ultrices. Cursus vitae congue mauris rhoncus. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Congue eu consequat ac felis donec et odio. Rhoncus aenean vel elit scelerisque mauris pellentesque. Posuere ac ut consequat semper viverra nam. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Amet dictum sit amet justo donec enim diam. A lacus vestibulum sed arcu non odio. Risus sed vulputate odio ut enim blandit volutpat maecenas. Mattis molestie a iaculis at erat.',
      date: '2023-12-17T18:23:45Z'
    }
  ]
}
