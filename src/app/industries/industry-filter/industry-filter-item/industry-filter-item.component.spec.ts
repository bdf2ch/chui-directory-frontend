import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryFilterItemComponent } from './industry-filter-item.component';

describe('IndustryFilterItemComponent', () => {
  let component: IndustryFilterItemComponent;
  let fixture: ComponentFixture<IndustryFilterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryFilterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryFilterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
