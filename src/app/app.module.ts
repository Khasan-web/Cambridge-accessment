import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { PrepareComponent } from './components/prepare/prepare.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { WhoAcceptComponent } from './components/why-choose-us/who-accept/who-accept.component';
import { EngSkillInWorkComponent } from './components/why-choose-us/eng-skill-in-work/eng-skill-in-work.component';
import { StudyAbroadComponent } from './components/why-choose-us/study-abroad/study-abroad.component';
import { ExamsTestsComponent } from './components/exams-tests/exams-tests.component';
import { SchoolsComponent } from './components/exams-tests/schools/schools.component';
import { GeneralHigherEduComponent } from './components/exams-tests/general-higher-edu/general-higher-edu.component';
import { FreeActivitiesComponent } from './components/prepare/free-activities/free-activities.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavigationService } from './services/navigation.service';
import { A2KetComponent } from './components/exams-tests/general-higher-edu/a2-ket/a2-ket.component';
import { B1PetComponent } from './components/exams-tests/general-higher-edu/b1-pet/b1-pet.component';
import { B2FceComponent } from './components/exams-tests/general-higher-edu/b2-fce/b2-fce.component';
import { PreA1YleStartersComponent } from './components/exams-tests/schools/pre-a1-yle-starters/pre-a1-yle-starters.component';
import { A1YleMoversComponent } from './components/exams-tests/schools/a1-yle-movers/a1-yle-movers.component';
import { A2YleFlyersComponent } from './components/exams-tests/schools/a2-yle-flyers/a2-yle-flyers.component';
import { A2KetSchoolComponent } from './components/exams-tests/schools/a2-ket-school/a2-ket-school.component';
import { B1PetSchoolComponent } from './components/exams-tests/schools/b1-pet-school/b1-pet-school.component';
import { B2FceSchoolComponent } from './components/exams-tests/schools/b2-fce-school/b2-fce-school.component';
import { C1CaeComponent } from './components/exams-tests/general-higher-edu/c1-cae/c1-cae.component';
import { GamesSocialMediaComponent } from './components/prepare/games-social-media/games-social-media.component';
import { ParentsChildrenComponent } from './components/prepare/parents-children/parents-children.component';
import { InformationForParentsComponent } from './components/prepare/parents-children/information-for-parents/information-for-parents.component';
import { CefrComponent } from './components/exams-tests/cefr/cefr.component';
import { FindUsComponent } from './components/find-us/find-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhyChooseUsComponent,
    PrepareComponent,
    NavbarComponent,
    FooterComponent,
    WhoAcceptComponent,
    EngSkillInWorkComponent,
    StudyAbroadComponent,
    ExamsTestsComponent,
    SchoolsComponent,
    GeneralHigherEduComponent,
    FreeActivitiesComponent,
    NotFoundComponent,
    A2KetComponent,
    B1PetComponent,
    B2FceComponent,
    PreA1YleStartersComponent,
    A1YleMoversComponent,
    A2YleFlyersComponent,
    A2KetSchoolComponent,
    B1PetSchoolComponent,
    B2FceSchoolComponent,
    C1CaeComponent,
    GamesSocialMediaComponent,
    ParentsChildrenComponent,
    InformationForParentsComponent,
    CefrComponent,
    FindUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
