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
    this.noteService.RestoreNote(note.noteId).subscribe((status:any)=>{
      this.snackBar.open(`Restore Note Successfull`, '', { duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'left' });
      }, error => {
        this.snackBar.open(`${error.error.message}`, '', { duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'left' });
      });
   }
   DeleteForever(note:any){
    this.noteService.DeleteForever(note.noteId).subscribe((status:any)=>{
      this.snackBar.open(`Delete Note Forever Successfull`, '', { duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'left' });
      }, error => {
        this.snackBar.open(`${error.error.message}`, '', { duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'left' });
      });
   }
  EmptyTrash() {
    this.noteService.EmptyTrash().subscribe((status: any) => {
      this.snackBar.open(`${status.message}`, '', { duration: 3000 });
    }, error => {
      this.snackBar.open(`${error.error.message}`, '', { duration: 3000 });
    })
  }
}
