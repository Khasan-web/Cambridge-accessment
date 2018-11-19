import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes, Router } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ExamsTestsComponent } from './components/exams-tests/exams-tests.component';
import { GeneralHigherEduComponent } from './components/exams-tests/general-higher-edu/general-higher-edu.component';
import { SchoolsComponent } from './components/exams-tests/schools/schools.component';
import { PrepareComponent } from './components/prepare/prepare.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { EngSkillInWorkComponent } from './components/why-choose-us/eng-skill-in-work/eng-skill-in-work.component';
import { StudyAbroadComponent } from './components/why-choose-us/study-abroad/study-abroad.component';
import { WhoAcceptComponent } from './components/why-choose-us/who-accept/who-accept.component';
import { PreA1YleStartersComponent } from './components/exams-tests/schools/pre-a1-yle-starters/pre-a1-yle-starters.component';
import { A1YleMoversComponent } from './components/exams-tests/schools/a1-yle-movers/a1-yle-movers.component';
import { A2YleFlyersComponent } from './components/exams-tests/schools/a2-yle-flyers/a2-yle-flyers.component';
import { A2KetSchoolComponent } from './components/exams-tests/schools/a2-ket-school/a2-ket-school.component';
import { B1PetSchoolComponent } from './components/exams-tests/schools/b1-pet-school/b1-pet-school.component';
import { B2FceSchoolComponent } from './components/exams-tests/schools/b2-fce-school/b2-fce-school.component';
import { A2KetComponent } from './components/exams-tests/general-higher-edu/a2-ket/a2-ket.component';
import { B1PetComponent } from './components/exams-tests/general-higher-edu/b1-pet/b1-pet.component';
import { B2FceComponent } from './components/exams-tests/general-higher-edu/b2-fce/b2-fce.component';
import { C1CaeComponent } from './components/exams-tests/general-higher-edu/c1-cae/c1-cae.component';
import { GamesSocialMediaComponent } from './components/prepare/games-social-media/games-social-media.component';
import { ParentsChildrenComponent } from './components/prepare/parents-children/parents-children.component';
import { InformationForParentsComponent } from './components/prepare/parents-children/information-for-parents/information-for-parents.component';
import { CefrComponent } from './components/exams-tests/cefr/cefr.component';
import { FindUsComponent } from './components/find-us/find-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'exams-tests', component:  ExamsTestsComponent},
    { path: 'exams-tests/cefr', component:  CefrComponent},
  { path: 'general-higher', component: GeneralHigherEduComponent},
    { path: 'exams-tests/general-higher/key', component: A2KetComponent },
    { path: 'exams-tests/general-higher/preliminary', component: B1PetComponent },
    { path: 'exams-tests/general-higher/first', component: B2FceComponent },
    { path: 'exams-tests/general-higher/advanced', component: C1CaeComponent },
  { path: 'schools', component: SchoolsComponent },
    { path: 'exams-tests/schools/starters', component: PreA1YleStartersComponent },
    { path: 'exams-tests/schools/movers', component:  A1YleMoversComponent},
    { path: 'exams-tests/schools/flyers', component:  A2YleFlyersComponent},
    { path: 'exams-tests/schools/key-for-schools', component:  A2KetSchoolComponent},
    { path: 'exams-tests/schools/preliminary-for-schools', component:  B1PetSchoolComponent},
    { path: 'exams-tests/schools/first-for-schools', component:  B2FceSchoolComponent},
  { path: 'prepare', component: PrepareComponent },
    { path: 'prepare/games-and-social-media', component: GamesSocialMediaComponent },
    { path: 'prepare/parents-and-children', component: ParentsChildrenComponent },
      { path: 'prepare/parents-and-children/information-for-parents', component: InformationForParentsComponent },
  { path: 'why-we', component: WhyChooseUsComponent },
  { path: 'why-we/who-accept-exams', component: WhoAcceptComponent },
  { path: 'why-we/end-skill-in-workplace', component: EngSkillInWorkComponent },
  { path: 'why-we/study-abroad', component: StudyAbroadComponent },
  { path: 'who-accept', component: WhoAcceptComponent },
  { path: 'find-us', component: FindUsComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
