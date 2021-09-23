import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {

  notes:any=[];
  constructor(private snackBar:MatSnackBar, private noteService:NoteServiceService) {}
  noteColor= "#fff";
  pinned = false;
  isReminder=false;
  show:boolean=true;
  Reminder="";
  ngOnInit(): void {
    this.Archive();
  }
  pinNote()
  {
    this.pinned=!this.pinned;
  }
  Archive()
   {
     console.log("getnote");
     this.noteService.ArchiveNotes().subscribe((result: any) => {
      this.notes=result.data;
      console.log(this.notes);
    });
   }
  RemoveReminder()
  {
    this.isReminder = false;
    this.Reminder="";
    this.snackBar.open('Reminder Deleted', '', {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left'
    });
  }

}
