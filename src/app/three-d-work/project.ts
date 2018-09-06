import { Image } from "../image/image";

export class Project {
    id: number;
    title: string;
    description: string;
    repository: string;
    imageMiniature : Image;
    images: Image[];

    constructor(options?: { id: number, title: string, description: string, repository: string, imageMiniature:Image, images: Image[] }) {
        if (options) {
            this.id = options.id;
            this.title = options.title;
            this.description = options.description;
            this.repository = options.repository;
            this.imageMiniature = options.imageMiniature;
            this.images = options.images;
        }
    }
}