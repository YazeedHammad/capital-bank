import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  city = 'Vancouver';
  weather = 'Sunny';
  temp = 23.0;

  constructor() { }

  ngOnInit() {
  }


}
