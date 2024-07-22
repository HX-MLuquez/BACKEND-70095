/*
Realizar un programa que utilice la  dependencia momentjs  (deberá instalarse por npm install).
Debe contar con una variable que almacene la fecha actual (utilizar moment())
Debe contar con una variable que almacene sólo la fecha de tu nacimiento (utilizar moment).
Validar con un if que la variable contenga una fecha válida (utilizar el método isValid());
Finalmente, mostrar por consola cuántos días han pasado desde que naciste hasta el día de hoy. (utilizar el método diff()
Extra: Cambia tu moment a la versión 1.6.0, al no ser la misma versión mayor, nota el cambio al correr el programa.

*/

const moment = require("moment");

function calcularEdad(fecha_propia) {
  const ahora = moment();
  const nacimiento = moment(fecha_propia, "YYYY-MM-DD");
  console.log(ahora);
  if (nacimiento.isValid()) {
    const años = ahora.diff(nacimiento, "years");
    const dias = ahora.diff(nacimiento, "days");
    console.log(`Tiene ${años} años y ${dias} días`);
    return años;
  } else {
    console.log("Fecha o formato incorrecto");
  }
}

calcularEdad('1988-05-15')