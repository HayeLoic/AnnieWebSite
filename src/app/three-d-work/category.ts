import { Image } from "./image";

export class Category {
    id: number;
    title: string;
    description: string;
    repository: string;
    images: Image[];
}