import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubServiceService } from './github-service.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    GithubServiceService
  ]
})
export class ServiceModule { }
