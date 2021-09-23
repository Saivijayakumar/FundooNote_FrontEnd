import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  opened: boolean = true;
  GridView:boolean = false;
  labels:any = [];
  choice:string='';

  constructor(private route : Router ,private noteService : NoteServiceService) { }
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
  Remind()
  {
    this.choice = 'Reminder';
    console.log(this.choice);
  }
}
