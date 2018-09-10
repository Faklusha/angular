import {Author} from '../addCourse/authors.model';

export class CourseItem {
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    isTopRated: boolean;
    authors: Author[];
}
