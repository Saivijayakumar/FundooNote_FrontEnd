import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  opened: boolean = true;
  GridView:boolean = false;
  constructor(private route : Router) { }
  UserData = JSON.parse(localStorage.getItem("UserDetails")!);
  ngOnInit(): void {
  }
  Logout(){
    localStorage.clear();
    this.route.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
