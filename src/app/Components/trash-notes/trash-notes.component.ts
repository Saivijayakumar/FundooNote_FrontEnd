import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
  notes:any=[];
  hovered=false;
  constructor(private noteService:NoteServiceService) { }

  ngOnInit(): void {
    this.Trash();
  }
  Trash()
   {
     console.log("getnote");
     this.noteService.TrashNotes().subscribe((result: any) => {
      this.notes=result.data;
      console.log(this.notes);
    });
   }

}
