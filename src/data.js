// Toda la data es un objeto
// - studio::: propiedad de tipo string
// - films: propiedad de tipo Array donde cada item es un objeto en si mismo
// - films[0] objetos de tipo string exceptuando peaople, locations y vehicles"  que son arreglos.

//Objeto Data con un metodo Get
//La ventaja de los objetos es que como tienen identidad, pueden encargarse de mas cosas dentro de el mismo

export function DataManager() {
    //Ready sera true cuando ya tienes la data disponible y data contiene tiene la "data"
    this.data = undefined; //
    this.ready = false;
    const process = () => {
            //destructuro el films para no llamarlo siempre data.films.forEach
            const { films } = this.data;
            this.films = films;
            this.years = films.map((item) => item.release_date).filter((item) => ![undefined].includes(item));
            this.years = [...new Set(this.years)]; //Un valor en un Set sólo puede estar una vez, el operador de descanso: ... lo que hace es recorrer los elementos de un objeto iterable y devolverlos separados por coma.
            console.log('los años ', this.years);
            this.producer = films.map((item) => item.producer).filter((item) => ![undefined].includes(item));
            this.producer = [...new Set(this.producer)];
            console.log('los productores', this.producer);
        }
        //Metodo para cargar la data.
    this.load = async() => { //funcion es asincrona
            const response = await fetch('/data/ghibli/ghibli.json'); //El método fetch() es una peticion get o post a una url en nuestro caso es local.
            this.data = await response.json(); // respuesta de la funcion asincrona, por medio de la palabra await
            console.log("data obtenida", this.data);
            this.ready = true;
            process();
            return this.ready;
        }
        //Metodo filtrar por productor.
    this.filterByProducer = (producer) => {
            console.log('sirve por fa ', this.films);
            if (!this.films) return []; //no se ha ejecutado el metodo load, no hay films para cargar.
            return this.films.filter((item) => {
                console.log("comparamos", `${item.producer} == ${producer}`)
                return item.producer == producer
            });
        }
        //Metodo ordenar ascendentes los films por release_date.
    this.orderByYearsAscending = () => {
            let yearsAscending = this.years.sort(function(a, b) {
                return a - b;
            })
            return yearsAscending;
        }
        //Metodo ordenar descendente los films por release_date.
    this.orderByYearsDescending = () => {
        let yearsDescendant = this.years.reverse();
        return yearsDescendant;
    }



}



//recibiría la data, y nos retornaría aquellos datos que sí cumplan con la condición.
//     //   
// const sortData = (data, sortBy, sortOrder) => {
//     }
//     //permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.
// const computeStats = (data) => {