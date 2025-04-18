
let opciones = ["1","2","3","4","5"];
let opcion;
do {

    opcion = prompt("ingrese una opcion de caluclo: ");
    if(opciones.includes(opcion)){

        if(opcion=="5"){
            alert("salir")
            break
        }
        let num1 = parseFloat(prompt("ingrese primer numero: "));
        let num2 = parseFloat(prompt("ingrese segundo numero: "));

        let resultado;
        
        if(opcion == "1"){
            resultado = num1 + num2;
        }else if(opcion == "2"){
            resultado = num1 - num2;
        }else if(opcion == "3"){
            resultado = num1 * num2;
        
        }else if(opcion == "4"){
            if(num2!=0){
                resultado = num1/num2;
            }else{
                alert("no exite la division por cero");
                continue;
            }
            
        }
        alert(resultado);


    }else{
        alert("debes de ingresar una opcion valida")
    }

} while(true)