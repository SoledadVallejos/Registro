let acciones = require("./funciones");

let process = require("process");
let comando = process.argv[2].toLowerCase()
let posicionTres = process.argv[3].toLowerCase();



switch (comando) {
    case 'consultar':
        acciones.consulta(posicionTres);
        break;

    default:
console.log("Seleccione una operacion");
        break;
}

