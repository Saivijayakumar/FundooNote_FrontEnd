import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';


@Component({
  selector: 'app-reminder-notes',
  templateUrl: './reminder-notes.component.html',
  styleUrls: ['./reminder-notes.component.scss']
})
export class ReminderNotesComponent implements OnInit {

  notes:any=[];
  constructor(private snackBar:MatSnackBar, private noteService:NoteServiceService,public dialog: MatDialog,private datasharing:DataServiceService) {}
  noteColor= "#fff";
  pinned = false;
  ExistenceOfPin:boolean = false;
  ExistenceOfOther:boolean = false;
  isReminder=false;
  show:boolean=true;
  Reminder="";
  ngOnInit(): void {
    this.Remindernote();
    this.datasharing.currentMessage.subscribe((change)=>{
      if(change == true){
        this.Remindernote();
        this.datasharing.changeMessage(false);
      }
    });
  }
  pinNote()
  {
    this.pinned=!this.pinned;
  }
  Remindernote()
   {
     console.log("getnote");
     this.noteService.ReminderNotes().subscribe((result: any) => {
      this.notes=result.data;
      for(var i of this.notes)
      {
        if(i.pin == true)
        {
          this.ExistenceOfPin= true;
          break;
        }
      }
      console.log(this.notes);
    });
   }
  RemoveReminder(id:any)
  {
    this.isReminder = false;
    this.Reminder="";
    this.noteService.RemoveReminder(id).subscribe((result:any)=>{
      if(result.status == true)
      {
        this.Remindernote();
      }
    });
    this.snackBar.open('Reminder Deleted', '', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left'
    });
  }
  openDialog(note:any)
  {
    console.log(note);
    this.dialog.open(UpdateNoteComponent, {
      panelClass: 'dialog-container-custom',
       data: {
      data: note
    }});
  }
}
