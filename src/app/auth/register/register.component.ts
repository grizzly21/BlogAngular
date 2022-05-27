import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {PasswordMatchValidator} from "../../common/validators/password-match.validator";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")]),
    repeatPassword: new FormControl(null),
  }, {validators: PasswordMatchValidator()});

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
  }

  registerUser(){
    if(this.registerForm.valid)
    this.authService.registerUser(this.registerForm.value).subscribe(res => {console.log(res)})
  }

}



