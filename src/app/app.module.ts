import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CourseListComponent } from './course-list/course-list.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { AssignTeacherComponent } from './assign-teacher/assign-teacher.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent,
    HomeComponent,
    CourseListComponent,
    AddTeacherComponent,
    AddCourseComponent,
    UpdateTeacherComponent,
    AssignTeacherComponent,
    TeacherDetailsComponent,
    UpdateCourseComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
