import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async loginUser(form: FormGroup) {
    const {email, password} = form.value;
    try {
      await this.authService.loginUser(email, password)
      this.router.navigate(['/'])
    } catch (e) {
      this.error = e.message
    }
  }

}
