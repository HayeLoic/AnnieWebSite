import { Component, OnInit } from '@angular/core';
import { Category } from '../three-d-work/category'
import { Image } from './image';

@Component({
  selector: 'app-three-d-work',
  templateUrl: './three-d-work.component.html',
  styleUrls: ['./three-d-work.component.css']
})
export class ThreeDWorkComponent implements OnInit {
  category: Category = {
    id: 1,
    title: 'Scale',
    description: 'This is scale.',
    repository: '../../assets/three-d-work/Scale/',
    images: [
      new Image({
        id: 1,
        fileName: 'Render_0200.png',
        location: null
      }),
      new Image({
        id: 2,
        fileName: 'Render_0378.png',
        location: null
      }),
      new Image({
        id: 3,
        fileName: 'scale01.jpg',
        location: null
      }),
      new Image({
        id: 4,
        fileName: 'scale02.jpg',
        location: null
      }),
      new Image({
        id: 5,
        fileName: 'scale03.jpg',
        location: null
      }),
      new Image({
        id: 6,
        fileName: 'vlcsnap-2014-07-25-00h18m21s0.png',
        location: null
      }),
    ]
  }

  setImageLocation(category: Category): Category {
    for (let image of category.images) {
        image.location = category.repository+ image.fileName;
    }
    return category;
  }

  constructor() { }

  ngOnInit() {
    this.setImageLocation(this.category);
  }
}
