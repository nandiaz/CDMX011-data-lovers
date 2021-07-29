export function moreInformation() {
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



}