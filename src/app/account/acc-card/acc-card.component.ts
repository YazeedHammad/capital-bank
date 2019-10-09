import { Component, OnInit, Input } from '@angular/core';
import { AccInfo } from '../acc-info.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AccInfoService } from '../acc-info.service';
import { AccListComponent } from '../acc-list/acc-list.component';


@Component({
  selector: 'app-acc-card',
  templateUrl: './acc-card.component.html',
  styleUrls: ['./acc-card.component.scss']
})
export class AccCardComponent implements OnInit {

  @Input() accInfo: AccInfo[];
  @Input() index: number;
  editMode = false;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private accInfoService: AccInfoService,
    private accList: AccListComponent) { }

  ngOnInit() {
    this.accInfo = this.accInfoService.getInfos()

  }

  onEditInfo() {
    this.accList.editMode = true;
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

}
