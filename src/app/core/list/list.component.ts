import { Component, OnInit } from '@angular/core';
import { Item } from '../item/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public courses: Item[] = [
    {
      title: 'Video Course 1',
      id: '1',
      creationDate: '05.03.2018',
      duration: '1h 28min',
      description: ' Some big text that describe course bla-bla-bla'
    },
    {
      title: 'Video Course 2',
      id: '2',
      creationDate: '05.03.2018',
      duration: '1h 28min',
      description: ' Some big text that describe course bla-bla-bla'
    },
    {
      title: 'Video Course 3',
      id: '4',
      creationDate: '05.03.2018',
      duration: '1h 28min',
      description: ' Some big text that describe course bla-bla-bla'
    },
    {
      title: 'Video Course 4',
      id: '4',
      creationDate: '05.03.2018',
      duration: '1h 28min',
      description: ' Some big text that describe course bla-bla-bla'
    },
    {
      title: 'Video Course 5',
      id: '5',
      creationDate: '05.03.2018',
      duration: '1h 28min',
      description: ' Some big text that describe course bla-bla-bla'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
