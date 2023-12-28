import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { DiscovercourseComponent } from './discovercourse/discovercourse.component';
import { LoginComponent } from './login/login.component';
import { PowdersComponent } from './powders/powders.component';
import { DalsComponent } from './dals/dals.component';
import { SpicesComponent } from './spices/spices.component';
import { PicklesComponent } from './pickles/pickles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    AboutComponent,
    JoinnowComponent,
    DiscovercourseComponent,
    LoginComponent,
    PowdersComponent,
    DalsComponent,
    SpicesComponent,
    PicklesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
