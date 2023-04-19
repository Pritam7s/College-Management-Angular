import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Teacher } from './teacher';
import { Course } from './course';
import { Params } from '@angular/router';

const TEACHER = 'http://localhost:8080/teacher/';
const COURSE = "http://localhost:8080/course/";
const deleteCourseById = "http://localhost:8080/course/deleteCourseById/";
const deleteTeach = 'http://localhost:8080/teacher/deleteTeacherById/';
const updateTeach = 'http://localhost:8080/teacher/updateTeacher';
const getTeachById = 'http://localhost:8080/teacher/getTeacherById';
const detailsTeacher = 'http://localhost:8080/teacher/updateTeacher';
const assigning = "http://localhost:8080/course/assignTeachertoCourse"
const updateCourse = "http://localhost:8080/course/updateCourse";
const getCourseById = "http://localhost:8080/course/getCourseById";
const detailsCourse = "http://localhost:8080/course/updateCourse";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  constructor(private http: HttpClient) { }


  getAllTeachers(): Observable<Teacher[]>
  {
    return this.http.get<Teacher[]>(TEACHER+'getAllTeachers',httpOptions);
  }

  deleteTeacherById(id: number): Observable<Object>
  {
    return this.http.delete(`${deleteTeach}/${id}`);
  }

  addTeacher(teacher: Teacher): Observable<Teacher>
  {
    return this.http.post<Teacher>(TEACHER+'createTeacher',teacher,httpOptions);
  }

  updateTeacerById(id: number, teacher: Teacher): Observable<Object>
  {
    return this.http.put(`${updateTeach}/${id}`, teacher);
  }

  getTeacherById(id: number): Observable<Teacher>
  {
    return this.http.get<Teacher>(`${getTeachById}/${id}`);
  }

  detailsTeacher(id: number, teacher: Teacher): Observable<Teacher>
  {
    return this.http.get<Teacher>(`${detailsTeacher}/${id}`);
  }



  getAllCourses(): Observable<Course[]>
  {
    return this.http.get<Course[]>(COURSE+'getAllCourses', httpOptions);
  }
  
  getCourseById(sId: number): Observable<Course>
  {
    return this.http.get<Course>(`${getCourseById}/${sId}`);
  }

  addCourse(course: Course): Observable<Object>
  {
    return this.http.post<any>(COURSE+'createCourse',course,httpOptions);
  }

  updateCourseById(sId: number, course: Course): Observable<Object>
  {
    return this.http.put(`${updateCourse}/${sId}`, course);
  }

  detailsCourse(sId: number, course: Course): Observable<Course>
  {
    return this.http.get<Course>(`${detailsTeacher}/${sId}`)
  }

  deleteCourseById(id: number): Observable<Object>
  {
    return this.http.delete(`${deleteCourseById}/${id}`);
  }

  assign(teacherId: number, courseId: number): Observable<Params>
  {
    return this.http.post(`${assigning}/${teacherId}/${courseId}`, httpOptions);
  }
}
