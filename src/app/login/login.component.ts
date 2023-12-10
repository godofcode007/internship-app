import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DashboardComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  onSubmit() {
    // throw new Error('Method not implemented.');
    console.warn(this.loginForm.value);
  }

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    const PasswordPattern: RegExp = /^(?=.*[a-zA-Z0-9]).{4,}$/;

    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          //Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.(com|net)$'),
          Validators.email,
        ],
      ],
      password: [
        '',
        [Validators.required, Validators.pattern(PasswordPattern)],
      ],
    });
  }

  ngOnInit(): void {}

  onLogin() {
    if (this.loginForm.valid) {
      const dto = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      };

      this.loginService.login(dto).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('/dashboard');
      });
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }

  // onLogin() {
  //   const dto = {
  //     email: 'phoenix@caretta.net',
  //     password: 'string',
  //   };

  //   this.loginService.login(dto).subscribe((res) => {
  //     console.log(res);
  //   });
  // }
}
