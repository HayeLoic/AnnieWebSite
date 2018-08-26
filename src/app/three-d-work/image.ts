export class Image {
    id: number;
    fileName: string;
    location: string;

    constructor(options?: {id: number; fileName: string; location: string}) {
        if (options) {
            this.id = options.id;
            this.fileName = options.fileName;
            this.location = options.location;
        }
    }
}