import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WarsComponent } from './wars/wars.component';
import { WarFormComponent } from './war-form/war-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { WarsTableComponent } from './wars-table/wars-table.component';
import { AddFlagPipe } from './pipes/add-flag.pipe';
import { SortWarsPipe } from './pipes/sort-wars.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WarsComponent,
    WarFormComponent,
    UppercasePipe,
    WarsTableComponent,
    AddFlagPipe,
    SortWarsPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

