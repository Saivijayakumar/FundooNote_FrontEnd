import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {

  notes: any = [];
  constructor(private snackBar: MatSnackBar, private noteService: NoteServiceService, private datasharing: DataServiceService) { }
  noteColor = "#fff";
  pinned = false;
  isReminder = false;
  show: boolean = true;
  Reminder = "";
  ngOnInit(): void {
    this.Archive();
    this.datasharing.currentMessage.subscribe((change)=>{
      if(change == true){
        this.Archive();
        this.datasharing.changeMessage(false);
      }
    });
  }
  pinNote() {
    this.pinned = !this.pinned;
  }
  Archive() {
    console.log("getnote");
    this.noteService.ArchiveNotes().subscribe((result: any) => {
      this.notes = result.data;
      console.log(this.notes);
    });
  }
  RemoveReminder(id: any) {
    this.isReminder = false;
    this.Reminder = "";
    this.noteService.RemoveReminder(id).subscribe((result: any) => {
      this.Archive();
      if (result.status == true) {
        this.datasharing.changeMessage(true);
      }
    });
    this.snackBar.open('Reminder Deleted', '', {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left'
    });
  }

}
