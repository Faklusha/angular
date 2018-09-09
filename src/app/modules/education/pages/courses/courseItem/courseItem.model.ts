import {Author} from '../../../general/authors/author.model';

export class CourseItem {
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    isTopRated: boolean;
    authors: Author[];
}
