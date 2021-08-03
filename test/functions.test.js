const fetch = require("node-fetch")

describe("main function", function() {
    test("Get data", async() => {
        const response = await fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'); //El método fetch() es una peticion get o post a una url en nuestro caso es local.
        let data = await response.json();
        console.log('Cargando data', data);
        expect(data ? true : false).toBe(true)

        const filterByProducer = (producer) => {
            return data.producer.filter((item) => {
                console.log('Data disponible de productor', data)
                return item.producer === producer;
                // console.log('Data disponible', data)
                expect(data.filterByProducer('Hayao Miyazaki')).toBe('My Neighbor Totoro');
            });
        };
        // filterByProducer('Hayao Miyazaki');
        // console.log('Filtrando por este pana', filterByProducer);
    })
})