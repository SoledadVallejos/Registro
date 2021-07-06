let acciones = require("./funciones");

let process = require("process");
let comando = process.argv[2].toLowerCase();
let posicionTres = process.argv[3].toLowerCase();
let posicionCuatro = +process.argv[4].toLowerCase();






switch (comando) {
    case 'consultar':
       
        acciones.consultar(posicionTres);
        break;
    case 'extraer':
        acciones.extraer(posicionTres, posicionCuatro);
        break;  

    case 'depositar':
        acciones.depositar(posicionTres, posicionCuatro);
        break;      
    default:
console.log("Seleccione una operacion");
        break;
}


