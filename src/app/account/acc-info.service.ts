import { Injectable } from '@angular/core';
import { AccInfo } from './acc-info.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccInfoService {

  InfoChanged = new Subject<AccInfo[]>();



  accInfo: AccInfo[] = [
    new AccInfo(1, 2060860, 'Yazeed', 186.91, 'USD'),
    new AccInfo(2, 2045698, 'Saif', 45.89, 'EUR'),
    new AccInfo(3, 2063254, 'Saleh', 554.32, 'JOD'),
  ]

  constructor() { }

  setInfos(infos: AccInfo[]) {
    this.accInfo = infos;
    this.InfoChanged.next(this.accInfo.slice());
  }

  getInfos() {
    return this.accInfo.slice();
  }

  getInfo(index: number) {
    return this.accInfo[index];
  }

  addAccount(info: AccInfo) {
    this.accInfo.push(info);
    this.InfoChanged.next(this.accInfo.slice());
  }

  updateInfo(index: number, newInfo: AccInfo) {
    this.accInfo[index] = newInfo;
    this.InfoChanged.next(this.accInfo.slice());
  }

  deleteAccount(index: number) {
    this.accInfo.splice(index, 1);
    this.InfoChanged.next(this.accInfo.slice());
  }

}
