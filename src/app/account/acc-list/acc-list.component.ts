import { Component, OnInit } from '@angular/core';
import { AccInfo } from '../acc-info.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AccInfoService } from '../acc-info.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-acc-list',
  templateUrl: './acc-list.component.html',
  styleUrls: ['./acc-list.component.scss']
})
export class AccListComponent implements OnInit {
  // accInfo: AccInfo[] = [
  //   new AccInfo(1, 123, 'Yazeed', 186.475, '$'),
  //   new AccInfo(2, 123, 'Saif', 186.475, '$'),
  //   new AccInfo(2, 123, 'Saif', 186.475, '$'),
  //   new AccInfo(2, 123, 'Saif', 186.475, '$')
  // ]

  accInfo: AccInfo[];
  public detailsMode: boolean = false;
  public type: string;
  public data: any;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private accInfoService: AccInfoService) { }


  ngOnInit() {
    this.subscription = this.accInfoService.InfoChanged
      .subscribe(
        (info: AccInfo[]) => {
          this.accInfo = info;
        }
      );
    this.accInfo = this.accInfoService.getInfos()
  }

  onNewAccount() {
    // this.detailsMode = true;  
    // this.router.navigate(['new'], { relativeTo: this.route });
    this.detailsMode = false;
    this.type = 'CREATE';
    this.data = {};
    this.detailsMode = true;

  }
  public onEditAccount(index: number): void {
    this.detailsMode = false;
    this.type = 'UPDATE';
    console.log(this.accInfo, index);

    this.data = this.accInfo[index];
    this.detailsMode = true;
  }


}
