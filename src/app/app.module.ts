import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{MatToolbarModule} from'@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{MatButtonModule} from '@angular/material/button'
import{MatInputModule} from '@angular/material/input'
import{MatFormFieldModule} from '@angular/material/form-field'
import { provideAnimations, BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import{MatMenuModule} from'@angular/material/menu';
import{MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import{MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from '@angular/material/card';
import { CSKComponent } from './csk/csk.component'
import {RouterModule} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HistoryComponent } from './history/history.component';
import{MatExpansionModule} from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FeedbackComponent } from './feedback/feedback.component'
import{MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MIComponent } from './mi/mi.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MisquadComponent } from './misquad/misquad.component';

@NgModule({
  declarations: [
    AppComponent,
    CSKComponent,
    HomePageComponent,
    HistoryComponent,
    FeedbackComponent,
    MIComponent,
    MisquadComponent,
  
  ],
  imports: [
    BrowserModule,MatSidenavModule,MatListModule,MatIconModule,MatButtonToggleModule,
    AppRoutingModule,MatToolbarModule,MatButtonModule,MatInputModule,MatFormFieldModule, BrowserAnimationsModule,MatMenuModule,
    MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatGridListModule,MatCardModule,RouterModule,MatExpansionModule,MatTableModule,
    MatProgressSpinnerModule,MatStepperModule,ReactiveFormsModule,NoopAnimationsModule
  ],
  exports:[
    MatToolbarModule
  ],

  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
