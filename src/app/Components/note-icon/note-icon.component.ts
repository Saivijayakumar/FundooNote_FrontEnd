import { Component, OnInit } from '@angular/core';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-note-icon',
  templateUrl: './note-icon.component.html',
  styleUrls: ['./note-icon.component.scss']
})
export class NoteIconComponent implements OnInit {

  constructor(
    private note:NoteComponent
  ) { }

  ngOnInit(): void {
  }
  Close()
  {
    this.note.show = true;
  }
}
