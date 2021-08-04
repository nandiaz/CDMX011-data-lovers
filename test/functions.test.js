const fetch = require("node-fetch")

describe('main function', function() {
    test("Get data", async() => {
        const response = await fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'); //El método fetch() es una peticion get o post a una url en nuestro caso es local.
        let data = await response.json();
        //console.log('Cargando data', data);
        expect(data ? true : false).toBe(true)
        expect(data.title).toBe('My Neighbor Totoro')
        expect(data.producer).toBe('Hayao Miyazaki')
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