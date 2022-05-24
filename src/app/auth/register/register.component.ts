import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";

// @ts-ignore
const PasswordMatchValidator: ValidatorFn = (fg: FormGroup) => {
  const password = fg.get('password')?.value;
  const repeatPassword = fg.get('repeatPassword')?.value;
  return password === repeatPassword ? null : {repeatPassword: true};
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([
        Validators.required,
        Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")])],
      repeatPassword: [null, Validators.compose([Validators.required, PasswordMatchValidator])],
    }, {validator: PasswordMatchValidator})
  }

  ngOnInit(): void {
  }


  registerUser(){
    this.authService.registerUser(this.registerForm.value).subscribe(res => {console.log(res)})
  }
}
