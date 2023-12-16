import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeferrableViewsComponent {

}
