import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  users: User[] = [
    new User('Yazeed', 'Y@zeed@123'),
    new User('Saif', 'S@if@123')
  ]
  isLoggedin: boolean = false;
  constructor() { }

  public login(userInfo: User): boolean {
    let isValid = false;
    for (let i = 0; i < this.users.length; i++) {
      const e = this.users[i];
      if (e.username.toLowerCase() === userInfo.username.toLowerCase() && e.password === userInfo.password) {
        isValid = true;
        break;
      }
    }
    console.log(userInfo, isValid, this.users);

    if (isValid) {
      localStorage.setItem('ACCESS_TOKEN', JSON.stringify(userInfo));
      this.isLoggedin = true;
      return this.isLoggedin;
    } else {
      return this.isLoggedin;
    }
    // localStorage.setItem('ACCESS_TOKEN', JSON.stringify(userInfo));
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') ? true : false;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    this.isLoggedin = false;
  }
}