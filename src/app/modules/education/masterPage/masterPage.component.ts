import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-master-page',
  templateUrl: './masterPage.component.html',
  styleUrls: ['./masterPage.component.css']
})
export class MasterPageComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
  }
  public user = this.authenticationService.getUser();

  ngOnInit() {
  }

}
