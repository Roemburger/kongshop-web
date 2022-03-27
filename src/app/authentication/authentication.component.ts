import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  loggedIn = true;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    this.loggedIn = !this.loggedIn;
  }

}
