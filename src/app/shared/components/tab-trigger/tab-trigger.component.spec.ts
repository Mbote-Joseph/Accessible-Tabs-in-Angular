import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTriggerComponent } from './tab-trigger.component';

describe('TabTriggerComponent', () => {
  let component: TabTriggerComponent;
  let fixture: ComponentFixture<TabTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabTriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
