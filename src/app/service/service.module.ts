import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubServiceService } from './github-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DataServiceService } from './data-service.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    GithubServiceService,
    DataServiceService
  ]
})
export class ServiceModule { }
