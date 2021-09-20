import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-note-icon',
  templateUrl: './note-icon.component.html',
  styleUrls: ['./note-icon.component.scss']
})
export class NoteIconComponent implements OnInit {
  constructor(
    private note: NoteComponent,
    private noteService: NoteServiceService,
    private snackBar: MatSnackBar
  ) { }
  ngOnInit(): void {
  }
  CreateNote() {
    this.note.show = true;
    this.noteService.CreateNote(this.note.NoteForm.value)
      .subscribe((result: any) => {
        this.snackBar.open(`${result.message}`, '', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'left' });
      }, error => {
        this.snackBar.open(`${error.error.message}`, '', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'left' });
      });
      this.note.NoteForm.reset();
  }
}
