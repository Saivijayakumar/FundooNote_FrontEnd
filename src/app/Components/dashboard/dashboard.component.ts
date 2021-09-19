import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  opened: boolean = true;
  GridView:boolean = false;
  constructor() { }
  UserData = JSON.parse(localStorage.getItem("UserDetails")!);
  ngOnInit(): void {
  }
}
