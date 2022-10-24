import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LayoutModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }