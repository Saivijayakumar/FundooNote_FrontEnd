import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLablesComponent } from './get-lables.component';

describe('GetLablesComponent', () => {
  let component: GetLablesComponent;
  let fixture: ComponentFixture<GetLablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetLablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
