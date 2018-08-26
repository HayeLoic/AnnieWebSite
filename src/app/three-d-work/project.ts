import { Image } from "./image";

export class Project {
    id: number;
    title: string;
    description: string;
    repository: string;
    images: Image[];
}