import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../services/users.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() public user: User;
  constructor() { }

  ngOnInit() {
  }

}
