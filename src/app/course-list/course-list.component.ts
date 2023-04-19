import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Route, Router } from '@angular/router';
import { Course } from '../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{
  courses: Course[] | undefined;
  constructor(private authService: AuthServiceService, private router: Router){}

  ngOnInit(): void {
    this.getAllCourses();
  }

  private getAllCourses(){
    this.authService.getAllCourses().subscribe(data=>
      {this.courses=data;});
  }

  deleteCourseById(id: number)
  {
    this.authService.deleteCourseById(id).subscribe(
      data=> {this.router.navigate(['course']);}
    );
  }

  updateCourse(sId: number)
  {
    this.router.navigate(['updateCourse', sId]);
  }

  detailsCourse(sId: number)
  {
    this.router.navigate(['detailsCourse', sId]);
  }

  reloadPage() 
  {
    window.location.reload();
  }
}
