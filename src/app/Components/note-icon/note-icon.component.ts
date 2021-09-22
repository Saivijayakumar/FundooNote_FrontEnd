import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
import { CollaboraterDialogComponent } from '../collaborater-dialog/collaborater-dialog.component';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-note-icon',
  templateUrl: './note-icon.component.html',
  styleUrls: ['./note-icon.component.scss']
})
export class NoteIconComponent implements OnInit {

  archive:boolean = false;
  reminders: any[] = [{"Text": "Later Today","Time":"1:00"},{"Text": "Tommorow","Time":"8:00"},{"Text": "Next Week","Time":"mon,9:00"}];
  colors: any[] = [{ "color": "#fff", "toolTip": "default", "check": true },{"color": "#F28B82","toolTip": "Red","check": false},{"color": "#FFF475","toolTip": "Yellow","check": false},{"color": "#FBBC04","toolTip": "Orange","check": false},{"color": "#CCFF90","toolTip": "Green","check": false},{"color": "#AECBFA","toolTip": "Dark Blue","check": false},{"color": "#CBF0F8","toolTip": "Blue","check": false},{"color": "#E6C9A8","toolTip": "Brown","check": false}];
  constructor(
    private note: NoteComponent,
    private noteService: NoteServiceService,
    private snackBar: MatSnackBar,
    public dialog : MatDialog
  ) { }
  ngOnInit(): void {
  }

  ChangeColor(color: any) {
    this.note.noteColor = color;
    for (var val of this.colors)
      val.check = val.color == color ? true : false;
  }
  CreateNote() {
    this.note.show = true;
    let noteColor = this.note.noteColor=="white"?null:this.note.noteColor;
    let noteReminder = this.note.Reminder==""?null:this.note.Reminder;
    const data = {
      Title:this.note.NoteForm.value.Title,
      Description:this.note.NoteForm.value.Description,
      Color:noteColor,
      Reminder:noteReminder,
      Pin:this.note.pin,
      Archieve:this.archive
    }
    this.noteService.CreateNote(data)
      .subscribe((result: any) => {
        this.snackBar.open(`${result.message}`, '', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'left' });
        this.note.noteColor="#fff";
        this.archive=false;
        this.note.Reminder="";
        this.note.pin = false;
      }, error => {
        this.snackBar.open(`${error.error.message}`, '', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'left' });
      });
    this.note.NoteForm.reset();
  }
  addReminder(rem:any)
  {
    this.note.isReminder=true;
    this.note.Reminder=`${rem.Text} ${rem.Time}`
  }
  openDialog(){
    this.dialog.open(CollaboraterDialogComponent)
  }
  archiveNote()
  {
    this.snackBar.open(`${this.archive?'Note UnArchived':'Note Archived'}`, '', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'left' });
    this.archive=!this.archive;
  }
}
