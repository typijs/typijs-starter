import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TypiJsModule } from '@typijs/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TypiJsModule.forRoot({
      adminRoute: '/typijs',
      configFilePath: '/assets/config.json'
  }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
