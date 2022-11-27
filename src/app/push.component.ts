import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app2',
  template: `
    <h2>{{ title }}</h2>
    <ul *ngFor="let item of data">
      <li>{{ item }}</li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PushComponent {
  title = 'OnPush change strategy';
  @Input() data: string[] | undefined;
}
