import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnErrorComponent } from './on-error/on-error.component';
import { VisitsComponent } from './visits/visits.component';
import { WorkComponent } from './work/work.component';
import { MeetingdetailsComponent } from './meetingdetails/meetingdetails.component';
 
const routes: Routes = [
  {path:"visits",component:VisitsComponent},
  {path:"visits/:id",component:MeetingdetailsComponent},
  {path:"work",component:WorkComponent},
  {path:"",redirectTo:"/visits",pathMatch:"full"},
  {path:"**",component:OnErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
