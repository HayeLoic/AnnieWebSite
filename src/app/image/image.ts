export class Image {
    id: number;
    fileName: string;
    location: string;

    constructor(options?: {fileName: string}) {
        if (options) {
            this.fileName = options.fileName;
            this.location = null;
        }
    }
}