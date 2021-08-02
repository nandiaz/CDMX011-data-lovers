import { DataManager } from '../src/data.js';
import data from '../src/data/ghibli/ghibli.js'
// eslint-disable-next-line no-console
//console.log('data js que trae', data);

//const fetch = require('node-fetch')

// eslint-disable-next-line no-unused-vars
let manager = new DataManager();

// manager.data = (async() => {
//     const response = await fetch('/data/ghibli/ghibli.json'); //El método fetch() es una peticion get o post a una url en nuestro caso es local.
//     let out = await response.json();
//     return out
// });
//console.log(manager);

describe('DataManager', () => {
    it('it a function', () => {
        expect(typeof DataManager).toBe('function');
    });
    describe('DataManager.filterByProducer', () => {
        it('should be a function', () => {
            expect(typeof manager.filterByProducer).toBe('function');
        });

        it('should return dos del producer Hayao Miyazaki', () => {
            manager.data = data;
            expect(manager.filterByProducer('Hayao Miyazaki')).toHaveLength(2);

        });
        // it('should return two films', async() => {
        //     await manager.load().then((response) => {
        //         let results = false;
        //         if (Array.isArray(response.result) === true) {
        //             results = true;
        //         }
        //         expect(results).toBeTruthy();
        //     });
        //     //expect(manager.filterByProducer('Hayao Miyazaki')).toStrictEqual([]);
    })


})

// it('should return dos del producer Hayao Miyazaki', async() => {
//     manager.data = data;
//     expect(data.filterByProducer('Hayao Miyazaki')).toStrictEqual('My Neighbor Totoro');
// });
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