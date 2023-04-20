import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador.component';
import { FormsModule } from '@angular/forms';
import { GithubServiceService } from '../service/github-service.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule
  ],
  exports:[
    BuscadorComponent
  ],
  providers:[
    GithubServiceService
  ]
})
export class BuscadorModule { }
