import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './title.component.html',
  styles: `
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent { 

  title = input.required<string>()

}
