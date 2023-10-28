import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import {FormsModule} from '@angular/forms';
import { StyleclassComponent } from './styleclass/styleclass.component';
import { ForloopComponent } from './forloop/forloop.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    StyleclassComponent,
    ForloopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
,  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
