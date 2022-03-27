import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: AuthService) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    if (!form.valid) return;
    const email = form.value.email;
    const password = form.value.password
    this.service.login(email, password)
      .subscribe(
        (response:any) => {
          this.router.navigate(['/product-list']);
        }
      );
  }
}
