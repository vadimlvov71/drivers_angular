import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe'; // -> imported filter pipe  

@NgModule({

  declarations: [
    AppComponent,
    FilterPipe // -> added filter pipe to use it inside the component
  ],

  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    
  ],
  exports: [FilterPipe],
  providers: [],

  bootstrap: [AppComponent]

})
export class AppModule { }