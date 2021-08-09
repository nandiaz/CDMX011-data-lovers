/* eslint-disable no-console */
/* eslint-disable no-undef */
const fetch = require("node-fetch")

describe('main function', function() {
    test('Get data', async() => {
        const response = await fetch('https://akdavila2.github.io/CDMX011-data-lovers/data/ghibli/ghibli.json'); //El método fetch() es una peticion get o post a una url en nuestro caso es local.
        let data = await response.json();
        //console.log('Cargando data', data);
        expect(data ? true : false).toBe(true);
    })
    test('should return the number of films por producer', async() => {
        const response = await fetch('https://akdavila2.github.io/CDMX011-data-lovers/data/ghibli/ghibli.json'); //El método fetch() es una peticion get o post a una url en nuestro caso es local.
        let data = await response.json();
        const { films } = data;

        const filterByProducer = (producer) => {
            return films.filter((item) => {
                return item.producer === producer;
            })
        }
        expect(filterByProducer('Toru Hara')).toHaveLength(1);
        expect(filterByProducer('Hayao Miyazaki')).toHaveLength(2);
    })

    test('Get should fail the test with invalid url', async() => {
        const response = await fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'); //El método fetch() es una peticion get o post a una url en nuestro caso es local.
        let data = await response.json();
        expect.assertions(1) //esperamos una expectativa 
        try {
            await data('https://ghibliapi.falsa') //pasamos una url invalida
        } catch (error) {
            expect(error).not.toBeNull()
        }
    })
})