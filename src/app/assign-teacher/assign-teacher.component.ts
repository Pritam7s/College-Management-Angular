import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assign-teacher',
  templateUrl: './assign-teacher.component.html',
  styleUrls: ['./assign-teacher.component.css']
})
export class AssignTeacherComponent implements OnInit{
  teacherId!: number;
  courseId!: number;
constructor(private authService: AuthServiceService, private router: Router){}
  ngOnInit(): void {
    
  }

  form = new FormGroup(
    {
      teachId: new FormControl("",[Validators.required, Validators.minLength(1)]),
      courseId: new FormControl("",[Validators.required, Validators.minLength(3)]),
    }
  );

  get f()
  {
    return this.form.controls;
  }

  onSubmit()
  {
    this.authService.assign(this.teacherId, this.courseId).subscribe(
      data=>{
        console.log('SUCCESS', data);
        this.gotoCourseList();
      }
    );
  }

  gotoCourseList()
  {
    this.router.navigate(['/courses']);
  }

}
