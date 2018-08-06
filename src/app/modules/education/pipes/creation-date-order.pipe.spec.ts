// import {CreationDateOrderPipe} from './creation-date-order.pipe';
//
// describe('Pipe: CreationDateOrder', () => {
//     let pipe: CreationDateOrderPipe;
//
//     const courses = [
//         {
//             name: 'Video Course 1',
//             id: 1,
//             date: 'July 07 2018',
//             length: 66,
//             description: ' Some big text that describe course bla-bla-bla',
//             isTopRated: true
//         },
//         {
//             name: 'Video Course 2',
//             id: 2,
//             date: 'July 11 2018',
//             length: 122,
//             description: ' Some big text that describe course bla-bla-bla',
//             isTopRated: true
//         },
//         {
//             name: 'Video Course 3',
//             id: 3,
//             date: 'July 04 2018',
//             length: 4,
//             description: ' Some big text that describe course bla-bla-bla',
//             isTopRated: false
//         },
//         {
//             name: 'Video Course 4',
//             id: 4,
//             date: 'July 17 2018',
//             duration: 140,
//             description: ' Some big text that describe course bla-bla-bla',
//             isTopRated: false
//         },
//         {
//             name: 'Video Course 5',
//             id: 5,
//             date: 'July 01 2019',
//             length: 40,
//             description: ' Some big text that describe course bla-bla-bla',
//             isTopRated: false
//         },
//     ];
//
//
//     beforeEach(() => {
//         pipe = new CreationDateOrderPipe();
//     });
//     it('should order courses', () => {
//         const orderedCourses = pipe.transform(courses);
//
//         for (let i = 0; i < orderedCourses.length - 1; i++) {
//             const courseTime = new Date(orderedCourses[i].date).getTime();
//             const nextCourseTime = new Date(orderedCourses[i + 1].date).getTime();
//             expect(courseTime).toBeLessThanOrEqual(nextCourseTime);
//         }
//     });
// });
