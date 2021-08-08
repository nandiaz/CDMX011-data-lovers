/* eslint-disable no-console */
/* eslint-disable no-undef */
const fetch = require("node-fetch")

describe('main function', function() {
    test('Get data', async() => {
        const response = await fetch('https://akdavila2.github.io/CDMX011-data-lovers/data/ghibli/ghibli.json'); //El método fetch() es una peticion get o post a una url en nuestro caso es local.
        let data = await response.json();
        //console.log('Cargando data', data);
        expect(data ? true : false).toBe(true);
        // eslint-disable-next-line no-unused-vars
        // let years = films.map((item => item.release_date).filter((item) => ![undefined].includes(item)));
        // years = [...new Set(years)];
        // console.log('muestra años', years)

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
    test('should return the titles in ascending and descending order', async() => {
        const response = await fetch('https://akdavila2.github.io/CDMX011-data-lovers/data/ghibli/ghibli.json');
        let data = await response.json();
        const { films } = data;
        const sortData = (option, field) => {
            let checkIsUp = (a, b) => a > b;
            let types = ['upward', 'falling'];
            if (!types.includes(option)) return new Error('El tipo no existe');
            return films.sort((filmA, filmB) => {
                if (filmA[field] === filmB[field]) return 0; //aqui comparo los campos
                let isUp = checkIsUp(filmA[field], filmB[field]);
                if (option === 'upward') return isUp ? 1 : -1; //operadores ternarios variable = expresion ? true_value : false_value;
                if (option === 'falling') return isUp ? -1 : 1;
            })
        }
        const title = films.map((item => item.title));
        console.log('titulos', title)
        expect(sortData('upward', title)).toBe("Castle in the Sky");

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