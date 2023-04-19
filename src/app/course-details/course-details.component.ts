import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  constructor(private authService: AuthServiceService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.sId = this.route.snapshot.params['sId'];
    this.authService.getCourseById(this.sId).subscribe(data=>
      {
        this.course=data;
      });
  }

  course: Course = new Course();
  sId!: number;
  isSuccessful = false;
  isFailed = false;
  
  form = new FormGroup(
    {
      subid: new FormControl("",[Validators.required, Validators.minLength(3)]),
      subname: new FormControl("",[Validators.required, Validators.minLength(1)]),
      price: new FormControl("",[Validators.required, Validators.minLength(2)])
    }
  );
  
  get f()
  {
    return this.form.controls;
  }
  
  onSubmit()
  {
    this.authService.addCourse(this.course).subscribe(
      data =>{console.log('SUCCESS', data);
      this.goToCourseList();
      this.isSuccessful=true;
      this.isFailed=false;
    },
    err=>
    {
      console.log('FAILURE', err);
      this.goToCourseList();
      this.isSuccessful=false;
      this.isFailed=true;
    }
    );
  };
  
  goToCourseList()
  {
    this.router.navigate(['/courses']);
  }
  }
  