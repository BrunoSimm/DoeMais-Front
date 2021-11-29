import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDoadorComponent } from './dashboard-doador.component';

describe('DashboardDoadorComponent', () => {
  let component: DashboardDoadorComponent;
  let fixture: ComponentFixture<DashboardDoadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDoadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDoadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
