import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-trigger',
  template: `
    <button
      [id]="triggerId"
      role="tab"
      [attr.aria-controls]="panelId"
      [attr.aria-selected]="isActive"
      tabindex="-1"
    >
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./tab-trigger.component.scss']
})
export class TabTriggerComponent {
  @Input() isActive: boolean;
  @Input() triggerId: string;
  @Input() panelId: string;
}