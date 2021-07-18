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