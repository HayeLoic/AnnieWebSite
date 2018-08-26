import { Image } from "./image";

export class Project {
    id: number;
    title: string;
    description: string;
    repository: string;
    images: Image[];

    constructor(options?: { id: number, title: string, description: string, repository: string, images: Image[] }) {
        if (options) {
            this.id = options.id;
            this.title = options.title;
            this.description = options.description;
            this.repository = options.repository;
            this.images = options.images;
        }
    }
}