function calcularPrecioDescuento(precio, descuento){
    
    PorcentajeDescuento = 100 - descuento; 
    precioConDescuento = (precio *  PorcentajeDescuento)/ 100;

    return precioConDescuento;
}

function onClickCalcularPrecioDescuento(){
    
    const precioOriginal = document.getElementById("precioOriginal").value;
    const descuento = document.getElementById("descuento").value;

    const totalPagar = calcularPrecioDescuento(precioOriginal,descuento);
    
    const resultHtml = document.getElementById("priceToPay");

    if(precioOriginal == '' || descuento == ''){
        resultHtml.innerHTML ="<style>#alert{color:red;font-weight:bold;}</style><p id='alert'>Debe llenar los campos correspondientes</p>"    
    }else{
        resultHtml.innerText = "El precio a pagar quitandole el descuento es: $" + totalPagar;
    }
}