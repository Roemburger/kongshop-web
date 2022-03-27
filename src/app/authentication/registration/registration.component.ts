import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router, private service: AuthService) { }

  ngOnInit(): void {
    this.fillInForm();
  }

  fillInForm() {
    this.form = new FormGroup({
        email: new FormControl(),
        password: new FormControl(),
        repeatPassword: new FormControl(),
        firstName: new FormControl(),
        lastName: new FormControl(),
        street: new FormControl(),
        number: new FormControl(),
        postalCode: new FormControl(),
        city: new FormControl(),
        region: new FormControl(),
        country: new FormControl(),
      },
    )
  }

  register() {
    this.service.signup(this.form.value)
      .subscribe((response: any) => {
        this.router.navigate(['/product-list']);
      });
  }
}
