import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewerydetailComponent } from './brewerydetail.component';

describe('BrewerydetailComponent', () => {
  let component: BrewerydetailComponent;
  let fixture: ComponentFixture<BrewerydetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrewerydetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrewerydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
