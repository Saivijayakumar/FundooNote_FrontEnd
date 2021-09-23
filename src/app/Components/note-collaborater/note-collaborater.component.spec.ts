import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCollaboraterComponent } from './note-collaborater.component';

describe('NoteCollaboraterComponent', () => {
  let component: NoteCollaboraterComponent;
  let fixture: ComponentFixture<NoteCollaboraterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteCollaboraterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteCollaboraterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
