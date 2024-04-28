import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CSKComponent } from './csk/csk.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MIComponent } from './mi/mi.component';
import { MisquadComponent } from './misquad/misquad.component';

const routes: Routes = [{
  path:'CSK',component:CSKComponent
},
{
  path:'',component:HomePageComponent
},
{
  path:'feedback',component:FeedbackComponent
},{
  path:'mi',component:MIComponent
},{
  path:'misquad',component:MisquadComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
