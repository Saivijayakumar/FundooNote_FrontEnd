import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
import { EditlabelComponent } from '../editlabel/editlabel.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  opened: boolean = true;
  GridView:boolean = false;
  labels:any = [];
  labelName:any='';
  choice:string='';

  constructor(private route : Router ,private noteService : NoteServiceService,public dialog:MatDialog) { }
  UserData = JSON.parse(localStorage.getItem("UserDetails")!);
  ngOnInit(): void {
    this.getAllLabels();
  }
  Logout(){
    localStorage.removeItem("UserDetails");
    this.route.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
  getAllLabels()
  {
     this.noteService.GetLabels().subscribe((status: any) => {
      this.labels=status.data;
      console.log(this.labels);
    });
  }
  openDialog()
  {
    let dialogRef =this.dialog.open(EditlabelComponent);
    dialogRef.afterClosed().subscribe(result =>
      {
  
      });
}
}
