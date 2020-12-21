import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { LandingComponent } from './components/landing/landing.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "resume", component: ResumeComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
