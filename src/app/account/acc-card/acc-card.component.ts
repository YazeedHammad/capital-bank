import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccInfo } from '../acc-info.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AccInfoService } from '../acc-info.service';


@Component({
  selector: 'app-acc-card',
  templateUrl: './acc-card.component.html',
  styleUrls: ['./acc-card.component.scss']
})
export class AccCardComponent implements OnInit {

  @Input() public accInfo: AccInfo[];
  @Input() index: number;
  @Output() openEditMode = new EventEmitter<void>();
  public editMode = false;
  @Input() amount: number;
  @Output() result: number;

  public crrncy = {
    'EUR': { 'JOD': 0.78, 'USD': 0.83, 'GBP': 0.87, 'CAD': 1.46 },
    'USD': { 'JOD': 0.71, 'EUR': 1.2, 'GBP': 0.79, 'CAD': 1.32 },
    'JOD': { 'USD': 1.41, 'EUR': 1.28, 'GBP': 1.11, 'CAD': 1.86 },
    'GBP': { 'EUR': 1.15, 'USD': 1.26, 'JOD': 0.90, 'CAD': 1.67 },
    'CAD': { 'EUR': 0.69, 'USD': 0.76, 'JOD': 0.54, 'GBP': 0.60 }
  }

  constructor(private route: ActivatedRoute,
    private router: Router,
    private accInfoService: AccInfoService) { }


  ngOnInit() {
    // console.log(this.accInfo);

  }

  onEditInfo() {
    // this.accList.detailsMode = true;
    // this.router.navigate(['edit'], { relativeTo: this.route });
    this.openEditMode.emit();
  }

  onDeleteAccount() {
    if (confirm('Are you sure you want to delete this account ?')) {
      this.accInfoService.deleteAccount(this.index);
    }
  }

  onTrans() {
    console.log("account balance", this.accInfo["accBalance"]);
    let accBalance = this.accInfo["accBalance"];
    const id = (<HTMLSelectElement>document.getElementById('selectedID')).value;
    const transaction = this.convertCurrency()
    console.log("transaction = ", transaction);

    accBalance = accBalance - transaction;
    console.log("new balance = ", accBalance);


  }

  convertCurrency() {
    const cur1 = this.accInfo["balanceCurrency"]
    const cur2 = (<HTMLSelectElement>document.getElementById('currency')).value;
    console.log("cur2= ", cur2);
    console.log("amount = ", this.amount);

    if (this.accInfo["accBalance"] != 0) {
      if (cur1 == cur2) {
        return this.result = this.amount;
      } else {
        return this.result = this.amount * this.crrncy[cur1][cur2];
      }
    }

  }
}
