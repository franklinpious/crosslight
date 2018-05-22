import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserListService } from './user-list.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  public ngUnsubscriber: Subject<any> = new Subject<void>();
  public userData: any;

  constructor(private userListSvc: UserListService) { }

  ngOnInit() {
    this.userListSvc.getData().takeUntil(this.ngUnsubscriber).subscribe((res: any) => {
      this.userData = res.data;
    });
  }

  ngOnDestroy() {
    try {
      this.ngUnsubscriber.next();
      this.ngUnsubscriber.complete();
    } catch (e) {
      console.warn('ngOnDestroy', e);
    }
  }

}
