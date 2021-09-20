import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  smallNote:boolean = true;
  bigNote:boolean = false;
  show:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  showNote()
  {
    this.smallNote = false;
    this.bigNote = true;
  }

}
