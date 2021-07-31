import { DataManager } from '../src/data.js';

describe('DataManager', () => {
    it('it a function', () => {
        expect(typeof DataManager).toBe('function');
    });
    describe('DataManager.filterByProducer', () => {
        it('should be a function', () => {
            expect(typeof DataManager.filterByProducer).toBe('function');
        });
        it('should return two films', () => {
            expect(DataManager.filterByProducer('Hayao Miyazaki')).toHaveLength(2);
        })


    })
})

// describe('DataManager.sortData', () => {
//         it('returns `sortData`', () => {
//             expect(DataManager.sortData('upward', 'title')).toBe('upward, title');
//             //         expect(sortData(option, field)).toBe('falling, release_date');
//             //         expect(sortData(option, field)).toBe('falling, title');
//             //         expect(sortData(option, field)).toBe('upward, release_date');
//             //     });
//         });

//     })
//     let option = '';
//     let field = '';
//     it('returns `sortData`', () => {
//         expect(sortData(option, field)).toBe('upward, title');
//         expect(sortData(option, field)).toBe('falling, release_date');
//         expect(sortData(option, field)).toBe('falling, title');
//         expect(sortData(option, field)).toBe('upward, release_date');
//     });
// });

// describe('filterByProducer', () => {
//     it('is a function', () => {
//         expect(typeof filterByProducer).toBe('function');
//     });

//     it('should return Miyazaki for Miyazaki with offset 33', () => {
//         expect(DataManager.filterByProducer('Hayao Miyazaki')).toHaveLength(2) ;
//     });