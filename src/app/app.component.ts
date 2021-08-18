import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  str: any;
  subscription: any;

  ngOnInit(): void {
    this.subscription = interval(3000).subscribe(() => this.generateRandomString());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  generateRandomString() {
    let randomSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += randomSymbols.charAt(Math.floor(Math.random() * randomSymbols.length));
    }
    this.str = result;
  }

  isPalindrome(str: string) {
    return str.split('').reverse().join('') === str;
  }

  containsOnlyNumbers(str: string) {
    return !/\D/.test(str);
  };

  containsZero(str: string) {
    return str.includes("0");
  }
}
