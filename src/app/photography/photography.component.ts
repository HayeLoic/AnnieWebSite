import { Component, OnInit } from '@angular/core';
import { PhotographiesSettings } from './photographies-settings';
import { Image } from '../image/image';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {

  photographies = null;
  photographiesRepository = '../../assets/photography/';

  setImagesLocation(images: Image[], repository: string): Image[] {
    for (let image of images) {
      image.location = repository + image.fileName;
    }
    return images;
  }

  constructor() { }

  ngOnInit() {
    this.photographies = PhotographiesSettings.GetPhotographies();
    this.setImagesLocation(this.photographies, this.photographiesRepository);
  }
}
