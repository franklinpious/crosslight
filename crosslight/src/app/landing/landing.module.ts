import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing.component';
import { LandingRouting } from './landing.routes';
import { LoginService } from './login/login.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    LandingRouting, FormsModule, ReactiveFormsModule
  ],
  declarations: [LoginComponent, LandingComponent],
  exports: [LandingComponent],
  providers: [LoginService]
})
export class LandingModule { }
