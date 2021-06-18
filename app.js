let acciones = require("./funciones");

let process = require("process");
let comando = process.argv[2].toLowerCase()






switch (comando) {
    case 'consultar':
        let posicionTres = process.argv[3].toLowerCase();
        acciones.consulta(posicionTres);
        break;
    case 'extraer':
        let posicionCuatro = process.argv[4].toLowerCase();
        acciones.extracion(posicionCuatro);
        break;   
        
    default:
console.log("Seleccione una operacion");
        break;
}


