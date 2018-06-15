import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private userService: UserService) {
  }
  public user = this.userService.getUser();

  ngOnInit() {
  }

}
