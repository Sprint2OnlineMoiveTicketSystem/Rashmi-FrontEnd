import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTheaterByCityIdComponent } from './search-theater-by-city-id.component';

describe('SearchTheaterByCityIdComponent', () => {
  let component: SearchTheaterByCityIdComponent;
  let fixture: ComponentFixture<SearchTheaterByCityIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTheaterByCityIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTheaterByCityIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
