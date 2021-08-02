import { DataManager } from '../src/data.js';
import data from '../src/data/ghibli/ghibli.js'
let manager = new DataManager();

//Cragando la data
const start = async() => {
    await manager.load();
    describe('DataManager', () => {
        it('it a function', () => {
            expect(typeof DataManager).toBe('function');
        });
        describe('DataManager.filterByProducer', () => {
            it('should be a function', () => {
                expect(typeof manager.filterByProducer).toBe('function');
            });

            it('should return dos poster del productor  Hayao Miyazaki', () => {
                manager.data = data;
                expect(manager.filterByProducer('Hayao Miyazaki')).toHaveLength(2);
            });
        })
    })
}
start();