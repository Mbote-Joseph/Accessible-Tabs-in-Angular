import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabTriggerComponent } from './components/tab-trigger/tab-trigger.component';
import { TabPanelComponent } from './components/tab-panel/tab-panel.component';



@NgModule({
  declarations: [TabTriggerComponent, TabPanelComponent],
  imports: [
    CommonModule
  ],
  exports: [TabTriggerComponent, TabPanelComponent]
})
export class SharedModule { }
