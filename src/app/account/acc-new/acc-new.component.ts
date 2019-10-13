import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-acc-new',
  templateUrl: './acc-new.component.html',
  styleUrls: ['./acc-new.component.scss']
})
export class AccNewComponent implements OnInit {

  @Input() amount: number;
  @Input() currency1: string;
  @Input() currency2: string;
  @Output() result: number;

  public crrncy = {
    'EUR': { 'JOD': 0.78, 'USD': 0.83, 'GBP': 0.87, 'CAD': 1.46 },
    'USD': { 'JOD': 0.71, 'EUR': 1.2, 'GBP': 0.79, 'CAD': 1.32 },
    'JOD': { 'USD': 1.41, 'EUR': 1.28, 'GBP': 1.11, 'CAD': 1.86 },
    'GBP': { 'EUR': 1.15, 'USD': 1.26, 'JOD': 0.90, 'CAD': 1.67 },
    'CAD': { 'EUR': 0.69, 'USD': 0.76, 'JOD': 0.54, 'GBP': 0.60 }
  }

  constructor() { }

  ngOnInit() {
  }

  showResult() {
    console.log(this.amount, this.currency1, this.currency2);

    if (this.currency1 == this.currency2) {
      this.result = this.amount;
    } else {
      this.result = this.amount * this.crrncy[this.currency1][this.currency2];
    }
  }
}
