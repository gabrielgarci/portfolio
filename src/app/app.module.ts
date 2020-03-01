import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { CoverComponent } from './components/cover/cover.component'
import { NavbarComponent } from './components/navbar/navbar.component'

@NgModule({
  declarations: [AppComponent, CoverComponent, NavbarComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
