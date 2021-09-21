import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  show:boolean = true;
  noteColor = "white";
  pin:boolean=true;
  isReminder=false;
  Reminder="Today";
  NoteForm !: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.NoteForm = new FormGroup({
      Title: new FormControl(),
      Description:new FormControl()
    });
  }
  changePin(){
    this.pin = !this.pin;
  }
  RemoveRemider()
  {
    this.isReminder = false;
  }
}
