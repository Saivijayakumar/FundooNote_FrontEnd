import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';

@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {

  notes:any=[];
  constructor(private snackBar:MatSnackBar, private noteService:NoteServiceService,public dialog: MatDialog,private datasharing:DataServiceService) {}
  noteColor= "#fff";
  ExistenceOfPin:boolean = false;
  pinned = false;
  isReminder=false;
  show:boolean=true;
  labelicon:boolean = false;
  Reminder="";
  ngOnInit(): void {
    this.getNotes();
    this.datasharing.currentMessage.subscribe((change)=>{
      if(change == true){
        this.getNotes();
        this.datasharing.changeMessage(false);
      }
    });
  }
  pinNote()
  {
    this.pinned=!this.pinned;
  }
  getNotes()
   {
     console.log("getnote");
     this.noteService.GetNote().subscribe((result: any) => {
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
        this.datasharing.changeMessage(true);
      }
    });
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
