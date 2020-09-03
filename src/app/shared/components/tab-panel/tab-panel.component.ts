import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-panel',
  template: `
    <div
      [id]="panelId"
      role="tabpanel"
      [attr.aria-labelledby]="triggerId"
      tabindex="0"
    >
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent {
  @Input() panelId: string;
  @Input() triggerId: string;
}