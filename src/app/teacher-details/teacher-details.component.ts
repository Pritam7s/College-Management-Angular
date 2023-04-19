import { Component } from '@angular/core';
import { Teacher } from '../teacher';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent {
  constructor(private authService: AuthServiceService, private router: Router, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.authService.getTeacherById(this.id).subscribe(data=>
      {
        this.teacher=data;
      });
  }

  teacher: Teacher = new Teacher();
  id!: number;

  isSuccessful = false;
  isFailed = false;

  form = new FormGroup(
    {
      firstname: new FormControl("",[Validators.required, Validators.minLength(3)]),
      lastname: new FormControl("",[Validators.required, Validators.minLength(3)]),
      contact: new FormControl("",[Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]*$")]),
      email: new FormControl("",[Validators.required, Validators.email]),
      username: new FormControl("",[Validators.required, Validators.minLength(3)]),
      password: new FormControl("",[Validators.required, Validators.minLength(6)])
    }
  );

  get f()
  {
    return this.form.controls;
  }


    onSubmit(){
    
  };

  goToTeacherList()
  {
    this.router.navigate(['/teachers']);
  }
}
