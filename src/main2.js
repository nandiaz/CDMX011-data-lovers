
  function filterFilmsSecond(id) {

   film= document.getElementById(id).value
    
    
    localStorage.setItem("Films", film);
  
  }
  var film = localStorage.getItem("Films")
  
  
  var container2 = document.getElementById("container2")
  
  var span = document.createElement("span")
  var contenido =document.createTextNode("Hola, " + film )
  container2.appendChild(span)
  span.appendChild(contenido)
  document.body.container2.appendChild(container2)