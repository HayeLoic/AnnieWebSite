export class Image {
    fileName: string;
    location: string;

    constructor(options?: {fileName: string}) {
        if (options) {
            this.fileName = options.fileName;
            this.location = null;
        }
    }
}