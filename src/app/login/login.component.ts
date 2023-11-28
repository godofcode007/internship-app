import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

  }

  onLogin() {
    const dto = {
      "email": "phoenix@caretta.net",
      "password": "string"
    }

    this.loginService.login(dto).subscribe(res => {
      console.log(res);
    });
  }


}
