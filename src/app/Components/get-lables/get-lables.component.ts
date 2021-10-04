import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-get-lables',
  templateUrl: './get-lables.component.html',
  styleUrls: ['./get-lables.component.scss']
})
export class GetLablesComponent implements OnInit {
  @Input() label: any;
  notes:any=[];
  constructor(private snackBar:MatSnackBar, private noteService:NoteServiceService,public dialog: MatDialog) {}
  noteColor= "#fff";
  ExistenceOfPin:boolean = false;
  pinned = false;
  isReminder=false;
  show:boolean=true;
  Reminder="";
  ngOnInit(): void {
    this.getLables();
  }
  pinNote()
  {
    this.pinned=!this.pinned;
  }
  getLables()
   {
     console.log("getnote");
     this.noteService.GetLableNotes(this.label).subscribe((result: any) => {
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
    this.noteService.RemoveReminder(id).subscribe();
    this.snackBar.open('Reminder Deleted', '', {
      duration: 2000,
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