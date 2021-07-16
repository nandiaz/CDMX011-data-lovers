// Toda la data es un objeto
// - studio::: propiedad de tipo string
// - films: propiedad de tipo Array donde cada item es un objeto en si mismo
// - films[0] objetos de tipo string exceptuando peaople, locations y vehicles"  que son arreglos.
export const getData = async() => {
    const response = await fetch('/data/ghibli/ghibli.json');
    const ghibli = await response.json();
    console.log("data obtenida", ghibli);
    return ghibli;

}