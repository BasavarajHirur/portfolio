import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ContactComponent,
  EducationComponent,
  ExperienceComponent,
  ProfileComponent,
  SkillsComponent
} from './sections';
import { HeaderComponent, HomeComponent } from './page';
import {
  AnimateSkillsComponent,
  ExperienceDetailsComponent,
  OtherSkillsComponent,
  PrimarySkillsComponent,
  ProjectDetailsComponent,
  SecondarySkillsComponent,
  SkillExperienceDetailsComponent
} from './components';
import { ServiceService } from './service/service.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ScrollingAnimationDirective } from './director/scrolling-animation.directive';
import { CommonEffect, commonReducer } from './store';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    ExperienceDetailsComponent,
    ProjectDetailsComponent,
    SkillsComponent,
    PrimarySkillsComponent,
    SecondarySkillsComponent,
    AnimateSkillsComponent,
    SkillExperienceDetailsComponent,
    OtherSkillsComponent,
    ScrollingAnimationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('data', commonReducer),
    EffectsModule.forFeature([CommonEffect]),
  ],
  exports: [
    ScrollingAnimationDirective
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
