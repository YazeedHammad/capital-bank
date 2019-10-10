import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() openEditMode = new EventEmitter<void>();
  editMode = false;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private accInfoService: AccInfoService) { }


  ngOnInit() {

  }

  onEditInfo() {
    // this.accList.detailsMode = true;
    // this.router.navigate(['edit'], { relativeTo: this.route });
    this.openEditMode.emit();
  }

}
