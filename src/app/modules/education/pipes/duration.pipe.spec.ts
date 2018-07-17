import {DurationPipe} from './duration.pipe';

describe('Pipe: Duration', () => {
    let pipe: DurationPipe;

    beforeEach(() => {
        pipe = new DurationPipe();
    });

    it('should show only minutes', () => {
        expect(pipe.transform('15')).toBe('15min');
    });

    it('should show hours and minutes', () => {
        expect(pipe.transform('105')).toBe('1h 45min');
    });
});
