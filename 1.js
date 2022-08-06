function contarOvejas(ovejas) {

  return ovejas.filter( (oveja) => oveja.name.toLowerCase().includes("a") && oveja.name.toLowerCase().includes("n") && oveja.color    =="rojo");
}