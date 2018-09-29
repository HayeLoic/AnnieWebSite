import { Image } from "../image/image";
import { SafeResourceUrl } from "@angular/platform-browser";

export class Project {
    id: number;
    title: string;
    description: string;
    repository: string;
    imageMiniature : Image;
    images: Image[];
    vimeoLink: string;
    vimeoLinkSafeResourceUrl: SafeResourceUrl;

    constructor(options?: { id: number, title: string, description: string, repository: string, imageMiniature:Image, images: Image[], vimeoLink: string }) {
        if (options) {
            this.id = options.id;
            this.title = options.title;
            this.description = options.description;
            this.repository = options.repository;
            this.imageMiniature = options.imageMiniature;
            this.images = options.images;
            this.vimeoLink = options.vimeoLink;
        }
    }
}