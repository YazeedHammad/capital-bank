import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //  users: User[] = [
  //   new User('Yazeed', 'Y@zeed@123'),
  //   new User('Saif', 'S@if@123')
  // ]

  constructor() { }

  public login(userInfo: User) {
    localStorage.setItem('ACCESS_TOKEN', JSON.stringify(userInfo));
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') === (JSON.stringify({ "username": "Yazeed", "password": "Y@zeed@123" }))

  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}