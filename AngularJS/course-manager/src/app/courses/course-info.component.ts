import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Course } from "./course";
import { CourseService } from "./courses.service";

@Component ({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
    course: Course | any;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

    ngOnInit(): void {
        this.courseService.retrieveById(+Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe({
            next: (course: Course) => this.course = course,
            error: (err: Error) => console.log('Error', err)
        });
    }

    save(): void {
      this.courseService.save(this.course).subscribe({
        next: (course: Course) => console.log("saved With Sucess", course),
        error: err => console.log("Error", err)
      })  
    }

}