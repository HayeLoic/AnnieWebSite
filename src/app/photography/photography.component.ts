import { Component, OnInit, HostListener } from '@angular/core';
import { Image } from '../image/image';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {
  photographies = null;
  photographiesRepository :string = 'assets/photography/';
  photographiesSettingsFileName: string = 'photographies-settings.json';
  selectedPhotography = null;
  hoveredPhotography = null;
  isGoToTopButtonHidden = true;

  setImagesLocation(images: Image[], repository: string): Image[] {
    for (let image of images) {
      image.location = repository + image.fileName;
    }
    return images;
  }

  setSelectedPhotography(photography: Image): void {
    this.selectedPhotography = photography;
  }

  setHoveredPhotography(photography: Image): void {
    this.hoveredPhotography = photography;
  }

  isHoveredPhotography(photography: Image): boolean {
    return this.hoveredPhotography == photography;
  }

  goToTop(): void {
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0;
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.isGoToTopButtonHidden = false;
    } else {
      this.isGoToTopButtonHidden = true;
    }
  }

  getPhotographies(): Observable<any> {
    return this.http.get(this.photographiesRepository + this.photographiesSettingsFileName);
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPhotographies().subscribe(
      photographiesJson => this.photographies = this.setImagesLocation(photographiesJson, this.photographiesRepository)
    );
  }
}
