import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
import { GetNotesComponent } from '../get-notes/get-notes.component';
import { CollaboraterDialogComponent } from '../collaborater-dialog/collaborater-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';
import { LabelServiceService } from 'src/app/Services/LabelService/label-service.service';

@Component({
  selector: 'app-get-notes-icon',
  templateUrl: './get-notes-icon.component.html',
  styleUrls: ['./get-notes-icon.component.scss']
})
export class GetNotesIconComponent implements OnInit {

  archive = false;
  moreMenu = false;
  labels:any = [];
  constructor(private getNote: GetNotesComponent, private snackBar: MatSnackBar, private noteService: NoteServiceService,private dialog : MatDialog,private datasharing:DataServiceService,
    private labelService:LabelServiceService,private dataService:DataServiceService) { }
  @Input() note: any;
  id: any;
  reminders: any[] = [{ "Text": "Later Today", "Time": "1:00" }, { "Text": "Tommorow", "Time": "8:00" }, { "Text": "Next Week", "Time": "mon,9:00" }];
  colors: any[] = [{ "color": "#fff", "toolTip": "default", "check": true }, { "color": "#F28B82", "toolTip": "Red", "check": false }, { "color": "#FFF475", "toolTip": "Yellow", "check": false }, { "color": "#FBBC04", "toolTip": "Orange", "check": false }, { "color": "#CCFF90", "toolTip": "Green", "check": false }, { "color": "#AECBFA", "toolTip": "Dark Blue", "check": false }, { "color": "#CBF0F8", "toolTip": "Blue", "check": false }, { "color": "#E6C9A8", "toolTip": "Brown", "check": false }];
  ngOnInit(): void {
    this.getIcon();
  }
  getIcon() {
    for (var val of this.colors)
      val.icon = val.color == this.note.color ? true : false;
  }
  AddReminder(rem:any) {
    
    console.log(this.note);
    this.getNote.Reminder = `${rem.Text},${rem.Time}`;
    this.noteService.ChangeReminder(this.note.noteId,this.getNote.Reminder).subscribe((result:any)=>{
      this.datasharing.changeMessage(true);
    });
    
  }
  ChangeColor(color: any) {
    this.getNote.noteColor = color;
    this.noteService.ChangeNoteColor(this.note.noteId,color).subscribe((result:any)=>{
      this.datasharing.changeMessage(true);
    });
  }
  archiveNote() {
    if (this.note.archieve) {
      console.log(this.note.noteId);
      this.noteService.UnArchieve(this.note.noteId).subscribe((status:any)=>{
        this.snackBar.open(`UnArchive Successfull`, '', { duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'left' });
        }, error => {
          this.snackBar.open(`${error.error.message}`, '', { duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'left' });
        });
    }
    else {
      console.log(this.note.noteId);
      this.noteService.Archieve(this.note.noteId).subscribe((status:any)=>{
        this.snackBar.open(`Archive Successfull`, '', { duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'left' });
        }, error => {
          this.snackBar.open(`${error.error.message}`, '', { duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'left' });
        });
    }
  }
  SendToTrash() {
    console.log("noteid");
    console.log(this.note);
    this.noteService.SendToTrash(this.note.noteId).subscribe((status:any)=>{
      this.snackBar.open(`Sent to Trash Successfull`, '', { duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'left' });
      }, error => {
        this.snackBar.open(`${error.error.message}`, '', { duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'left' });
      });
  }
  onFileChanged(event: any)
  {
    console.log("sai"+this.note.noteid);
    this.noteService.AddImage(this.note.noteId,event.target.files[0]).subscribe((response: any) => 
    {
      console.log(response);
      if(response.success == true)
        {
          this.snackBar.open(`${response.message}`, '', {duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'left'});
        }
      },error => {
        this.snackBar.open(`${error.error.message}`, '', { duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'left'});})
  }
  openDialog(){
    this.dialog.open(CollaboraterDialogComponent)
  }
  getLabel(){
    this.noteService.GetLabels()
    .subscribe((result:any)=>{
      this.labels = result.data;
      console.log(this.labels);
      this.dataService.changeMessage(result.status);
    })
  }
}
