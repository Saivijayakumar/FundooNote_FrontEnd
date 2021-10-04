import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private noteService: NoteServiceService, public dialogRef: MatDialogRef<UpdateNoteComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  bigNote: boolean = false;
  EditNoteForm !: FormGroup;
  pinned = false;
  noteColor = "#fff";
  isReminder = false;
  Reminder = "";
  ngOnInit(): void {
    this.EditNoteForm = new FormGroup({
      Title: new FormControl(),
      Description: new FormControl()
    });
  }
  pinNote(note: any) {
    if (note.pin) {
      console.log(note);
      this.noteService.UnPin(note.noteId).subscribe((status:any)=>{
        this.snackBar.open(`UnPin Successfull`, '', { duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'left' });
        }, error => {
          this.snackBar.open(`${error.error.message}`, '', { duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'left' });
        });
    }
    else {
      console.log(note);
      this.noteService.Pin(note.noteId).subscribe((status:any)=>{
        this.snackBar.open(`Pin Successfull`, '', { duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'left' });
        }, error => {
          this.snackBar.open(`${error.error.message}`, '', { duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'left' });
        });
    }
  }
  Close(note: any) {
    this.noteService.UpdateNote(note).subscribe();
    this.dialogRef.close();
  }

}