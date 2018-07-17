import {CreationDateOrderPipe} from './creation-date-order.pipe';

describe('Pipe: CreationDateOrder', () => {
    let pipe: CreationDateOrderPipe;

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
        pipe = new CreationDateOrderPipe();
    });
    it('should order courses', () => {
        const orderedCourses = pipe.transform(courses);

        for (let i = 0; i < orderedCourses.length - 1; i++) {
            const courseTime = new Date(orderedCourses[i].creationDate).getTime();
            const nextCourseTime = new Date(orderedCourses[i + 1].creationDate).getTime();
            expect(courseTime).toBeLessThanOrEqual(nextCourseTime);
        }
    });
});
