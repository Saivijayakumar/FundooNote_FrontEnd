import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborater-dialog',
  templateUrl: './collaborater-dialog.component.html',
  styleUrls: ['./collaborater-dialog.component.scss']
})
export class CollaboraterDialogComponent implements OnInit {

  constructor() { }
  UserData = JSON.parse(localStorage.getItem("UserDetails")!);

  ngOnInit(): void {
  }

}
