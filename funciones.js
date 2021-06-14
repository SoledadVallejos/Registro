let fs = require('fs');

//Funciones

module.exports = acciones = {
    leerJSON : () => {
        let listaDeTarea = fs.readFileSync('./cuentas.json', 'utf-8')
        let prueba = JSON.parse(listaDeTarea)
        return prueba
            },
     prueba: () =>{
         let pruebas = acciones.leerJSON()
         console.log(typeof(pruebas));
     },
    guardarJSON : (info) => {
        let nuevoJSON = JSON.stringify(info);
        fs.writeFileSync('./cuentas.json', nuevoJSON, 'utf-8')
                    },
    consulta: (banco) => {
        let resultado = 0;
        let datos = acciones.leerJSON()
    switch (banco) {
        case "santander":
            if(datos[0].banco[0].nombre == "santander"){
                resultado = datos[0].banco[0].monto;
                console.log("El saldo de la cuenta Santander es : " + resultado);
            }else if(datos[0].banco[1].nombre == "santander"){
                resultado = datos[0].banco[1].monto;
                console.log("El saldo de la cuenta Santander es : " + resultado);
            }
            break;
        case "ciudad":
            if( datos[0].banco[0].nombre === "banco ciudad"){
                resultado = datos[0].banco[0].monto;
                console.log("El saldo de la cuenta Ciudad es : " + resultado);
            }else if(datos[0].banco[1].nombre === "banco ciudad"){
                resultado = datos[0].banco[1].monto;
                console.log("El saldo de la cuenta Ciudad es : " + resultado);
            }
            break;
        default:
            console.log("El banco ingresado no existe");
            break;
    }
    return resultado
    },
    extracion: (banco, monto) =>{

    }
}
