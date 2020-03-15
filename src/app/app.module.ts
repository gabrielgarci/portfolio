import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { CoverComponent } from './components/cover/cover.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { AboutComponent } from './components/about/about.component'
import { SkillStatComponent } from './components/about/skill-stat/skill-stat.component'
import { IntersectionDirective } from './directives/intersection.directive'
import { ValueComponent } from './components/about/value/value.component'

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    NavbarComponent,
    AboutComponent,
    SkillStatComponent,
    IntersectionDirective,
    ValueComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
