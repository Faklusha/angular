import { Component, OnInit } from '@angular/core';
import {UserService} from '../../common/users/user.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './coursesPage.component.html',
  styleUrls: ['./coursesPage.component.css']
})
export class CoursesPageComponent implements OnInit {

  constructor(private userService: UserService) {
  }
  public user = this.userService.getUser();

  ngOnInit() {
  }

}
