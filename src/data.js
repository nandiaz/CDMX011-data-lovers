// Toda la data es un objeto
// - studio::: propiedad de tipo string
// - films: propiedad de tipo Array donde cada item es un objeto en si mismo
// - films[0] objetos de tipo string exceptuando peaople, locations y vehicles"  que son arreglos.
//Objeto Data con un metodo Get
//La ventaja de los objetos es que como tienen identidad, pueden encargarse de mas cosas dentro de el mismo
export function DataManager() {
    //Ready sera true cuando ya tienes la data disponible y data contiene la "data"
    this.data = undefined; //
    this.ready = false;
    const process = () => {
            const { films } = this.data; //destructuro el films para no llamarlo siempre data.films.forEach
            this.films = films;
            this.years = films.map((item) => item.release_date).filter((item) => ![undefined].includes(item));
            this.years = [...new Set(this.years)]; //Un valor en un Set sólo puede estar una vez, el operador de descanso: ... lo que hace es recorrer los elementos de un objeto iterable y devolverlos separados por coma.
            this.producer = films.map((item) => item.producer).filter((item) => ![undefined].includes(item));
            this.producer = [...new Set(this.producer)];
            this.title = films.map((item) => item.title);
        }
        //Metodo para cargar la data.
    this.load = async() => { //funcion es asincrona
            const response = await fetch('/data/ghibli/ghibli.json'); //El método fetch() es una peticion get o post a una url en nuestro caso es local.
            this.data = await response.json(); // respuesta de la funcion asincrona, por medio de la palabra await
            this.ready = true;
            process();
            return this.ready;
        }
        //Metodo filtrar por productor.
    this.filterByProducer = (producer) => {
            if (!this.films) return []; //no se ha ejecutado el metodo load, no hay films para cargar.
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
            console.log(2, field, 3, filmA[field], 4, filmB[field], 5, filmA);
            if (filmA[field] === filmB[field]) return 0; //aqui comparo los campos
            let isUp = checkIsUp(filmA[field], filmB[field]);
            if (option === 'upward') return isUp ? 1 : -1;
            if (option === 'falling') return isUp ? -1 : 1;
        });
    };
}