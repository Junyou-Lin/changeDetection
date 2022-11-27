import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app3',
  template: `
    <h2>{{ title }}</h2>
    <ul *ngFor="let item of data">
      <li>{{ item }}</li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DefaultComponent {
  title = 'Default change strategy';
  @Input() data: string[] | undefined;
}
