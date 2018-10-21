import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from 'store';
import {AuthService, User} from '../auth/shared/services/auth.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'taskreminder';
  user$: Observable<User>
  subscription: Subscription

  constructor(
    private store: Store,
    private authServie: AuthService
  ){}

  ngOnInit() {
    this.subscription = this.authServie.auth$.subscribe()
    this.user$ = this.store.select<User>('user')
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}


