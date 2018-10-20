import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async registerUser(form: FormGroup) {
    const {email, password} = form.value;
    try {
      await this.authService.createUser(email, password)
      this.router.navigate(['/'])
    } catch (e) {
     this.error = e.message
    }
  }

}
