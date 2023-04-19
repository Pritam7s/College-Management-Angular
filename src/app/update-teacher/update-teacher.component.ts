import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from '../teacher';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit{

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
    this.authService.updateTeacerById(this.id, this.teacher).subscribe(
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
