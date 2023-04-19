import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent {
constructor(private authService: AuthServiceService, private router: Router){}

  teacher: Teacher = new Teacher();

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
      this.authService.addTeacher(this.teacher).subscribe(
        data=>{
          console.log('SUCCESS',data);
          this.goToTeacherList();
          this.isSuccessful=true;
          this.isFailed=false;
        },
        err=>
        {
          console.log('FAILURE', err);
          this.goToTeacherList();
          this.isSuccessful=false;
          this.isFailed=true;
        }
      );
  };

  goToTeacherList()
  {
    this.router.navigate(['/teachers']);
  }
}
