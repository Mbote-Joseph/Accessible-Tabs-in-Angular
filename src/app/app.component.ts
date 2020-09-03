import {
  Component,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { TabTriggerComponent } from './shared/components/tab-trigger/tab-trigger.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChildren(TabTriggerComponent, { read: ElementRef })
  tabElements: QueryList<ElementRef>;
  tabs: ElementRef[];
  activated = 0;
  focused = 0;

  ngAfterViewInit() {
    this.tabs = this.tabElements.toArray();
    this.tabElements.first.nativeElement.firstChild.tabIndex = '0';
  }

  activatePanel(index: number) {
    this.tabs.forEach(tab => (tab.nativeElement.firstChild.tabIndex = -1));
    this.tabs[index].nativeElement.firstChild.tabIndex = index.toString();
    this.focused = index;
    this.activated = index;
  }

  focusPanel(index: number) {
    this.focused = index;
    this.tabs[this.focused].nativeElement.firstChild.focus();
  }

  handleKeyUp(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        this.focusPanel(this.focused ? this.focused - 1 : this.tabs.length - 1);
        break;
      case 'ArrowRight':
        this.focusPanel((this.focused + 1) % this.tabs.length);
        break;
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Home':
        event.preventDefault();
        this.focusPanel(0);
        break;
      case 'End':
        event.preventDefault();
        this.focusPanel(this.tabElements.length - 1);
        break;
    }
  }
}