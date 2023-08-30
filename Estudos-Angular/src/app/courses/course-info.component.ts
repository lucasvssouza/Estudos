import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-info.component.html',
})
export class CourseInfoComponent implements OnInit {
  course: Course | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam !== null && idParam !== undefined) {
      const courseData = this.courseService.retrieveById(+idParam);
      if (courseData !== null && courseData !== undefined) {
        this.course = courseData;
      }
    }
  }

  save(): void {
    this.courseService.save(this.course!);
  }
}
