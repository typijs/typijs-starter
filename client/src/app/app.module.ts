import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypiJsModule } from '@typijs/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlocksModule } from './blocks/blocks.module';
import { PagesModule } from './pages/pages.module';
import * as contentTypes from './register-content-types';
import { LayoutComponent } from './shared/layout/layout.component';

TypiJsModule.registerContentTypes(contentTypes);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    TypiJsModule.forRoot({
      adminRoute: '/typijs',
      configFilePath: '/assets/config.json'
    }),
    PagesModule,
    BlocksModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
