import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNotesIconComponent } from './get-notes-icon.component';

describe('GetNotesIconComponent', () => {
  let component: GetNotesIconComponent;
  let fixture: ComponentFixture<GetNotesIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNotesIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNotesIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
