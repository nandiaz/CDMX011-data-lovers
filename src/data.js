// Toda la data es un objeto
// - studio::: propiedad de tipo string
// - films: propiedad de tipo Array donde cada item es un objeto en si mismo
// - films[0] objetos de tipo string exceptuando peaople, locations y vehicles"  que son arreglos.
export const getData = async() => { //funcion es asincrona
        const response = await fetch('/data/ghibli/ghibli.json'); //El método fetch() es una peticion get o post a una url en nuestro caso es local.
        const ghibli = await response.json(); // respuesta de la funcion asincrona, por medio de la palabra await
        console.log("data obtenida", ghibli);
        return ghibli;

    }
    // recibiría la data, y nos retornaría aquellos datos que sí cumplan con la condición.
    // const filterData = (data, condition) => {

//     }
//     //El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.
// const sortData = (data, sortBy, sortOrder) => {

//     }
//     //permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.
// const computeStats = (data) => {

// }