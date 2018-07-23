import {SearchCoursesPipe} from './search-courses.pipe';

describe('Derective: Search', () => {
    let pipe: SearchCoursesPipe;
    const courses = [
        {
            title: 'Video Course 1',
            id: '1',
            creationDate: 'July 07 2018',
            duration: '66',
            description: ' Some big text that describe course bla-bla-bla',
            topRated: true
        },
        {
            title: 'Video Course 2',
            id: '2',
            creationDate: 'July 11 2018',
            duration: '122',
            description: ' Some big text that describe course bla-bla-bla',
            topRated: true
        },
        {
            title: 'Video Course 3',
            id: '3',
            creationDate: 'July 04 2018',
            duration: '4',
            description: ' Some big text that describe course bla-bla-bla',
            topRated: false
        },
        {
            title: 'Video Course 4',
            id: '4',
            creationDate: 'July 17 2018',
            duration: '140',
            description: ' Some big text that describe course bla-bla-bla',
            topRated: false
        },
        {
            title: 'Video Course 5',
            id: '5',
            creationDate: 'July 01 2019',
            duration: '40',
            description: ' Some big text that describe course bla-bla-bla',
            topRated: false
        },
    ];


    beforeEach(() => {
        pipe = new SearchCoursesPipe();
    });

    it('should return no courses', () => {
        expect(pipe.transform(courses, 'unexpected name').length).toBe(0);

    });

    it('should return one course', () => {
        expect(pipe.transform(courses, '1').length).toBe(1);
    });
});