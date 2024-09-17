import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent, EducationComponent, ExperienceComponent, ProfileComponent, SkillsComponent, ToolsComponent } from './sections';
import { HeaderComponent, HomeComponent } from './page';
import { ExperienceDetailsComponent, ProjectDetailsComponent } from './components';
import { ServiceService } from './service/service.service';
import { AnimateSkillsComponent, PrimarySkillsComponent, SecondarySkillsComponent } from './components/skills';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ToolsComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    ExperienceDetailsComponent,
    ProjectDetailsComponent,
    PrimarySkillsComponent,
    SecondarySkillsComponent,
    AnimateSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
