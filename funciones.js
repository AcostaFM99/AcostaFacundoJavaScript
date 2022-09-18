let cliente = '';
let tipo ='';
let total = 0;
let cuotasCliente = 0;
const clienteArray = [];




const edad = parseInt(prompt('En que año naciste?'));
    if(esMayor(edad)){
             total = parseInt(prompt('Cual es el total de la compra?'));
             cliente = parseInt(prompt('Que tipo de cliente es: 1. pintor 2. Ocasional 3. Casual' ));
                if(cliente == 1){
                    tipo = 'Pintor';
                }else if(cliente == 2){
                    tipo = 'Ocacional';
                }else if(cliente == 3){
                    tipo ='Casual';
                }
             cuotasCliente = parseInt (prompt('En cuantas cuotas lo quieres hacer: Ingrese 1. Para un pago, 2. Para hacerlo en 3 cuotas, 3. Para hacerlo en 6 cuotas, 4. Para 12 cuotas'))
                if(cuotasCliente == 1){
                    cuantasCuotas ='un pago';
                    alert('Su total es de: '+ calcularIva(descuentos(total,cliente)) + ' en un pago, Iva incluido.' );
                }else if(cuotasCliente == 2){
                    cuantasCuotas ='3 cuotas';
                    alert('Su total es de '+ calcularIva(descuentos(total,cliente)) + ' en 3 cuotas de: ' + Math.round(cuotas (calcularIva(descuentos(total,cliente)),cuotasCliente)) + ' sin interes.');
                }else if(cuotasCliente == 3){
                    cuantasCuotas ='6 cuotas';
                    alert('Su total es de '+ calcularIva(descuentos(total,cliente)) + ' en 6 cuotas de: ' + Math.round(cuotas (calcularIva(descuentos(total,cliente)),cuotasCliente)) + ' sin interes.');
                }else if(cuotasCliente == 4){
                    cuantasCuotas = '12 cuotas';
                    alert('Su total es de '+ calcularIva(descuentos(total,cliente)) + ' en 12 cuotas de: ' + Math.round(cuotas (calcularIva(descuentos(total,cliente)),cuotasCliente)) + ' sin interes.');
                }
    }else{alert('No eres mayor de edad, no puedes realizar esta compra.');}
    
let VerdaderoTotal = Math.round(cuotas (calcularIva(descuentos(total,cliente)),cuotasCliente));
let clienteParrafo = document.createElement('p')
clienteParrafo.innerHTML = 'Su total es: ' + calcularIva(descuentos(total,cliente));
const contenedor1 = document.getElementById('padre1');
contenedor1.append(clienteParrafo)

let respuesta = prompt('Cual es su nombre completo ?');
let parrafo = document.createElement('p');
parrafo.innerText = `Le agradecemos su compra ${respuesta}. Que tengan buen dia.`;
const contenedor2 = document.getElementById('padre2');
contenedor2.append(parrafo);

let Newcliente = {
    ClienteEdad:edad, 
    ClienteTotal:VerdaderoTotal,
    ClienteTipo: tipo,
    ClienteCuotas: cuantasCuotas,
} 

clienteArray.push(Newcliente);

const boton1 = document.getElementById('boton');
boton1.onclick = () =>{
    let email1 = document.getElementById('exampleFormControlInput1').value;
    let EmailParrafo = document.createElement('p');
    EmailParrafo.innerText = `Enviamos el comprobante de la compra al email: ${email1}`;
    const contenedor = document.getElementById('textoEmail');
    contenedor.append(EmailParrafo);
}

document.onkeydown =(event) =>{
    if(event.keyCode === 13){
            alert('Presiono enter');
    }
}

function calcularIva(total){
    const IvaIncluido = total + (total * 1.21);
    return IvaIncluido;
}

function cuotas (precio,cantidadCuotas){
    let CadaCuota = 0;
    switch(cantidadCuotas){
        
        case 1:cadaCuota = precio;        
        case 2:cadaCuota = precio / 3;
        break;
        case 3:cadaCuota = precio / 6;
        break;    
        case 4:cadaCuota = precio / 12;
        break;
    }
    return cadaCuota;
}

function esMayor(año){
    if(año >= 2004 ){
        return false;
    }else{
        return true;
    }

}

function descuentos(precio,tipoCliente){
    let descuentoAplicado = precio;
    switch(tipoCliente){
        case 1: precio = descuentoAplicado - (precio * 0.15);
        case 2 : precio = descuentoAplicado - (precio * 0.10);
        case 3 : precio;
    }
    return precio;

}