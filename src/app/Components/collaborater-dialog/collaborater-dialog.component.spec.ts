import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboraterDialogComponent } from './collaborater-dialog.component';

describe('CollaboraterDialogComponent', () => {
  let component: CollaboraterDialogComponent;
  let fixture: ComponentFixture<CollaboraterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboraterDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboraterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
