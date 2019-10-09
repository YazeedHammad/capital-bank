import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccListComponent } from '../acc-list/acc-list.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AccInfoService } from '../acc-info.service'

@Component({
  selector: 'app-acc-edit',
  templateUrl: './acc-edit.component.html',
  styleUrls: ['./acc-edit.component.scss']
})
export class AccEditComponent implements OnInit {
  id: number;
  infoForm: FormGroup;
  editMode = false;

  constructor(private accList: AccListComponent,
    private route: ActivatedRoute,
    private router: Router,
    private accInfoService: AccInfoService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm()
        }
      )
  }

  onSubmit() {
    if (this.editMode) {
      this.accInfoService.updateInfo(this.id, this.infoForm.value)
    } else {
      this.accInfoService.addAccount(this.infoForm.value)
    }
    console.log(this.infoForm);

    localStorage.setItem('updatedInfo', JSON.stringify(this.infoForm.value))

  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let accNumber;
    let nickName = '';
    let accBalance;
    let balanceCurrency = '';

    if (this.editMode) {
      const acc = this.accInfoService.getInfo(this.id);
      accNumber = acc.accNumber;
      nickName = acc.nickName;
      accBalance = acc.accBalance;
      balanceCurrency = acc.balanceCurrency;
    }
    this.infoForm = new FormGroup({
      'accNumber': new FormControl(accNumber, Validators.required),
      'nickName': new FormControl(nickName, Validators.required),
      'accBalance': new FormControl(accBalance, Validators.required),
      'balanceCurrency': new FormControl(balanceCurrency, Validators.required)
    })
  }

}
