function validarDNI() {
  var dni;
  var letra;
  // var letraOk;

  dni = prompt("Introducir su DNI (sin letra)");

  if (dni < 0 || dni > 99999999) {
    alert("El número introducido no es válido");
  } else {
    letra = prompt("Introduzca la letra de su DNI");

    if (!isNaN(letra)){
      alert ("Debes introducir una letra");

    }

    letra = letra.toUpperCase();

    //  para ver cambio minuscula a mayuscula
    // alert (letra);

    if (letra == getLetra(dni)) {
      alert("El DNI es correcto");
    } else {
      alert("La letra indicada no es correcta");
    }
  }
}

function getLetra(n) {
  var arrLetras = [ "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T",];
  var letra;

  var i = n % 23;

  letra = arrLetras[i];

  return letra;
}
