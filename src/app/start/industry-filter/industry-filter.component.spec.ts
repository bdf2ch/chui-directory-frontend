import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryFilterComponent } from './industry-filter.component';

describe('IndustryFilterComponent', () => {
  let component: IndustryFilterComponent;
  let fixture: ComponentFixture<IndustryFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
