import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeRouting } from './home.routes';
import { UserListService } from './user-list/user-list.service';


@NgModule({
  imports: [
    CommonModule,
    HomeRouting
  ],
  declarations: [HomeComponent, UserListComponent],
  providers: [UserListService]
})
export class HomeModule { }
