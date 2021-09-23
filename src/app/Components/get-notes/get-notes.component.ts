import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {

  notes:any=[];
  constructor(private snackBar:MatSnackBar, private noteService:NoteServiceService) {}
  noteColor= "#fff";
  pinned = false;
  isReminder=false;
  Reminder="";
  ngOnInit(): void {
    this.getNotes();
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
