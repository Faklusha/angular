import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item.model';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 @Input() public item: Item;
  constructor() { }

  ngOnInit() {
  }

}
