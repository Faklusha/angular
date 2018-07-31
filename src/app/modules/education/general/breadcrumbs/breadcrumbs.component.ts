import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CoursesListService} from '../../pages/courses/coursesList/coursesList.service';
import {CourseItem} from '../../pages/courses/courseItem/courseItem.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
public id: string;
public item?: string;
  constructor(private route: ActivatedRoute, private coursesListService: CoursesListService) { }

  ngOnInit() {
      this.route.params.subscribe((data) => {
          this.id = data['id'];
      });


      if (!this.id) {
         return;
      }

      if (this.id === 'new') {
          return this.item = 'add new Course';
      }

      const currentCourse: CourseItem = this.coursesListService.getCourse(this.id);
      this.item = currentCourse.title;

  }

}
