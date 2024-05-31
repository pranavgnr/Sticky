import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { StickyComponent } from './sticky/sticky.component';
import { StickyMoreDetailsComponent } from './sticky-more-details/sticky-more-details.component';
import { SharedModule } from '../shared/shared.module';
import { NgxTiptapModule } from 'ngx-tiptap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainScreenComponent,
    StickyComponent,
    StickyMoreDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxTiptapModule,
    FormsModule
  ]
})
export class FeaturesModule { }
