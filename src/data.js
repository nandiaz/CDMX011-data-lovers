/* eslint-disable no-undef */
// Toda la data es un objeto
// - studio::: propiedad de tipo string
// - films: propiedad de tipo Array donde cada item es un objeto en si mismo
// - films[0] objetos de tipo string exceptuando people, locations y vehicles"  que son arreglos.
//Objeto Data con un metodo Get
//La ventaja de los objetos es que como tienen identidad, pueden encargarse de mas cosas dentro de el mismo
export function DataManager() {
    //Ready sera true cuando ya esta la data disponible y data contiene la "data"
    this.data = undefined; //
    this.ready = false;
    const process = () => {
            const { films } = this.data; //destructuro el films
            this.films = films;
            console.log('mi data', this.films);
            this.title = films.map((item) => item.title);
            this.years = films.map((item) => item.release_date).filter((item) => ![undefined].includes(item));
            this.years = [...new Set(this.years)]; //Un valor en un Set sólo puede estar una vez, el operador de descanso: ... lo que hace es recorrer los elementos de un objeto iterable y devolverlos separados por coma.
            this.producer = films.map((item) => item.producer);
            this.producer = [...new Set(this.producer)];
        }
        //Metodo para cargar la data.
    this.load = async() => { //es una función asincrónica ya que está marcada con la async palabra clave.
            const response = await fetch('https://akdavila2.github.io/CDMX011-data-lovers/data/ghibli/ghibli.json'); //La API Fetch hace peticiones HTTP (usando GET, POSTy otros métodos) 
            //inicia una solicitud y devuelve una promesa. 
            //Debido a que la await palabra clave está presente, la función asincrónica se detiene hasta que se completa la solicitud.  
            this.data = await response.json(); // response.json()es un método en el objeto Response,devuelve una promesa, así que hay que esperar con await 
            this.ready = true;
            process();
            return this.ready;
        }
        //Metodo filtrar por productor.
    this.filterByProducer = (producer) => {
            return this.films.filter((item) => {
                return item.producer === producer;
            });
        }
        //ordena la lista de datos de manera ascendente o descendente, segun el campo pasado.
        //option define si el ordenamiento es ascendente o descendente
        //field nombre del campo en la data para ordenar, en nuestro caso title o release_data.
    this.sortData = (option, field) => {
        let checkIsUp = (a, b) => a > b;
        let types = ['upward', 'falling'];
        if (!types.includes(option)) return new Error('El tipo no existe');
        return this.films.sort((filmA, filmB) => {
            //console.log(2, field, 3, filmA[field], 4, filmB[field], 5, filmA);
            if (filmA[field] === filmB[field]) return 0; //aqui comparo los campos
            let isUp = checkIsUp(filmA[field], filmB[field]);
            if (option === 'upward') return isUp ? 1 : -1; //operadores ternarios variable = expresion ? true_value : false_value;
            if (option === 'falling') return isUp ? -1 : 1;
        });
    };
    //Metodo encargado de pasar la data segun el id proporcionado.
    this.getById = (id) => {
        let myFind = this.films.find(item => item.id === id);
        return myFind;
    }
}