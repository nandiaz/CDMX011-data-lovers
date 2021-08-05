/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const fetch = require("node-fetch")

describe('main function', function() {
    test("Get data", async() => {
        const response = await fetch('https://akdavila2.github.io/CDMX011-data-lovers/data/ghibli/ghibli.json'); //El método fetch() es una peticion get o post a una url en nuestro caso es local.
        let data = await response.json();
        //console.log('Cargando data', data.films[1]);
        expect(data ? true : false).toBe(true)
    })
    test('Get should fail the test with invalid url', async() => {
        //const response = await fetch('https://akdavila2.github.io/CDMX011-data-lovers/data/ghibli/ghibli.json'); //El método fetch() es una peticion get o post a una url en nuestro caso es local.
        //let data = await response.json();
        expect.assertions(1) //esperamos una expectativa 
        try {
            await data('https://https://akdavila2.github.io/CDMX011-data-lovers/data/ghibli/ghibli.json') //pasamos una url invalida
        } catch (error) {
            expect(error).not.toBeNull()
        }
    })
    test('Should return dos poster del productor  Hayao Miyazaki', async() => {
        const response = await fetch('https://akdavila2.github.io/CDMX011-data-lovers/data/ghibli/ghibli.json'); //El método fetch() es una peticion get o post a una url en nuestro caso es local.
        let data = await response.json();
        data = data.films; //destructuro el films para no llamarlo siempre data.films.forEach
        console.log('data viene', data);
        let films_producer = data.map((item) => item.producer);
        films_producer = [...new Set(films_producer)];
        // console.log('data viene', );
        // const filterByProducer = (producer) => {
        //     return films_producer.filter((item) => {
        //         return item.films_producer === producer;
        //     })
        // }
        //console.log('funcion', filterByProducer('Hayao Miyazaki'))
        //expect(filterByProducer('Hayao Miyazaki')).toBe('My Neighbor Totoro');
    })


    // console.log('entrando a producer', films_producer);

})