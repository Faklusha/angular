import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesContentComponent } from './coursesContent.component';
import { CoursesListComponent } from '../coursesList/coursesList.component';
import { CoursesOptionsComponent } from '../coursesOptions/coursesOptions.component';
import { CourseItemComponent } from '../courseItem/courseItem.component';
import { CoursesSearchComponent } from '../coursesSearch/coursesSearch.component';

describe('CoursesContentComponent', () => {
  let component: CoursesContentComponent;
  let fixture: ComponentFixture<CoursesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesContentComponent, CoursesListComponent, CoursesOptionsComponent, CourseItemComponent, CoursesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
