import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  hide1 = true;
  hide2 = true;
  constructor(
  ) { }

  ngOnInit(): void {
  }

}