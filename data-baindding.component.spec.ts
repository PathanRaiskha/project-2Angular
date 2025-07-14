import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBainddingComponent } from './data-baindding.component';

describe('DataBainddingComponent', () => {
  let component: DataBainddingComponent;
  let fixture: ComponentFixture<DataBainddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBainddingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBainddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
