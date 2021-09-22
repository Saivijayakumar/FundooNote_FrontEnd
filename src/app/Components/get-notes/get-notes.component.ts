import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {

  constructor(private snackBar:MatSnackBar,private notesService:NoteServiceService) { }
  noteColor= "#fff";
  pinned = false;
  isReminder=false;
  Reminder="";
  hovered = false;
  userNotes:any = [];
  ngOnInit(): void {
    this.GetNote();
  }
  pinNote()
  {
    this.pinned=!this.pinned;
  }
  RemoveReminder()
  {
    this.isReminder = false;
    this.snackBar.open('Reminder Deleted', '', {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left'
    });
  }
  GetNote()
  {
    this.notesService.GetNote()
  .subscribe(
    (status: any) => 
    {
    console.log(status.data);
    this.userNotes=status.data;
    })
  }

}
