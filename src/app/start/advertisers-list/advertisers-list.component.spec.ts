import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisersListComponent } from './advertisers-list.component';

describe('AdvertisersListComponent', () => {
  let component: AdvertisersListComponent;
  let fixture: ComponentFixture<AdvertisersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
