import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTheaterByCityIdComponent } from './add-theater-by-city-id.component';

describe('AddTheaterByCityIdComponent', () => {
  let component: AddTheaterByCityIdComponent;
  let fixture: ComponentFixture<AddTheaterByCityIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTheaterByCityIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTheaterByCityIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
