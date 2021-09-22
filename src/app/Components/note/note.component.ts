import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  show:boolean = true;
  noteColor = "white";
  pin:boolean=false;
  isReminder=false;
  Reminder="";
  NoteForm !: FormGroup;
  constructor(private snackBar:MatSnackBar) { }

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
    this.snackBar.open('Reminder Deleted', '', { duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'left'});
  }
}
