let fs = require('fs');

//Funciones

module.exports = acciones = {
    leerJSON : () => {
        let listaDeTarea = fs.readFileSync('./cuentas.json', 'utf-8')
        let prueba = JSON.parse(listaDeTarea)
        return prueba
     },
    guardarJSON : (info) => {
        let nuevoJSON = JSON.stringify(info,null, 2);
        fs.writeFileSync('./cuentas.json', nuevoJSON, 'utf-8')
     },
    consultar: (banco) => {
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
            if( datos[0].banco[0].nombre == "ciudad"){
                resultado = datos[0].banco[0].monto;
                console.log("El saldo de la cuenta Ciudad es : " + resultado);
            }else if(datos[0].banco[1].nombre == "ciudad"){
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
    extraer: (banco, monto) =>{
        let resultado = 0;
        let datos = acciones.leerJSON();
        if(isNaN(monto) == true){
            console.log("Ingrese un monto valido");
            return false
        }
        switch (banco) {
            case "santander":
                if (datos[0].banco[0].nombre === "santander"){
                    resultado = datos[0].banco[0].monto -= monto; //quiero que lo guarde en esta variable
                    datos[0].banco[0].monto = resultado;
                    acciones.guardarJSON(datos)
                   console.log("Retiro la suma de: " + monto);//Muestre este resultado por consola 
                   console.log("Tu saldo actual es : " + resultado);//Muestre este resultado por consola 

                }else if(datos[0].banco[1].nombre === "santander"){
                    resultado = datos[0].banco[1].monto -= monto;
                    datos[0].banco[1].monto = resultado;
                    acciones.guardarJSON(datos);
                    console.log("Retiro la suma de: " + monto);
                    console.log("Tu saldo actual es : " + resultado);
                }
                break;
            case "ciudad":
                if (datos[0].banco[0].nombre === "ciudad"){
                    resultado = datos[0].banco[0].monto -= monto;  
                    datos[0].banco[0].monto = resultado;
                    acciones.guardarJSON(datos);
                   console.log("Retiro la suma de: " + monto);
                   console.log("Tu saldo actual es : " + resultado);
                      
                }else if(datos[0].banco[1].nombre === "ciudad"){
                    resultado = datos[0].banco[1].monto -= monto;
                    datos[0].banco[1].monto = resultado;
                    acciones.guardarJSON(datos);
                    console.log("Retiro la suma de: " + monto);
                    console.log("Tu saldo actual es : " + resultado);
                    
                }
                break;
            default: console.log("El banco ingresado no existe");
                break;
        }
        return resultado
    },
    depositar: (banco, monto) =>{
        let resultado = 0;
        let datos = acciones.leerJSON();
        if(isNaN(monto) == true){
            console.log("Ingrese un monto valido");
            return false
        }
        switch (banco) {
            case "santander":
                if (datos[0].banco[0].nombre === "santander"){
                    resultado = datos[0].banco[0].monto += monto; 
                    datos[0].banco[0].monto = resultado;
                    acciones.guardarJSON(datos)
                   console.log("Retiro la suma de: " + monto);
                   console.log("Tu saldo actual es : " + resultado); 

                }else if(datos[0].banco[1].nombre === "santander"){
                    resultado = datos[0].banco[1].monto += monto;
                    datos[0].banco[1].monto = resultado;
                    acciones.guardarJSON(datos);
                    console.log("Retiro la suma de: " + monto);
                    console.log("Tu saldo actual es : " + resultado);
                }
                break;
            case "ciudad":
                if (datos[0].banco[0].nombre === "ciudad"){
                    resultado = datos[0].banco[0].monto += monto;  
                    datos[0].banco[0].monto = resultado;
                    acciones.guardarJSON(datos);
                   console.log("Retiro la suma de: " + monto);
                   console.log("Tu saldo actual es : " + resultado);
                      
                }else if(datos[0].banco[1].nombre === "ciudad"){
                    resultado = datos[0].banco[1].monto += monto;
                    datos[0].banco[1].monto = resultado;
                    acciones.guardarJSON(datos);
                    console.log("Retiro la suma de: " + monto);
                    console.log("Tu saldo actual es : " + resultado);
                    
                }
                break;
            default: console.log("El banco ingresado no existe");
                break;
        }
        return resultado

    } 
}

