import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { HomeComponent } from './home/home.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { AssignTeacherComponent } from './assign-teacher/assign-teacher.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

const routes: Routes = [
  {path:"teachers", component: TeacherListComponent},
  {path:"courses", component: CourseListComponent},
  {path:"home",component: HomeComponent},
  {path:"addteacher", component:AddTeacherComponent},
  {path:"addcourse", component:AddCourseComponent},
  {path:"updateTeacher/:id", component:UpdateTeacherComponent},
  {path:"assignTeacher", component:AssignTeacherComponent},
  {path:"detailsTeacher/:id", component:TeacherDetailsComponent},
  {path:"updateCourse/:sId", component:UpdateCourseComponent},
  {path:"detailsCourse/:sId", component:CourseDetailsComponent},
  {path:'', redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
