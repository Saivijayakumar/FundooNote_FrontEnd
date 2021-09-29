import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
  notes: any = [];
  hovered = false;
  constructor(private noteService: NoteServiceService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.Trash();
  }
  Trash() {
    console.log("getnote");
    this.noteService.TrashNotes().subscribe((result: any) => {
      this.notes = result.data;
      console.log(this.notes);
    });
  }
  RestoreNote(note:any)
   {
    this.noteService.RestoreNote(note.noteId).subscribe();
   }
   DeleteForever(note:any){
    this.noteService.DeleteForever(note.noteId).subscribe();
   }
  EmptyTrash() {
    this.noteService.EmptyTrash().subscribe((status: any) => {
      this.snackBar.open(`${status.message}`, '', { duration: 3000 });
    }, error => {
      this.snackBar.open(`${error.error.message}`, '', { duration: 3000 });
    })
  }
}
