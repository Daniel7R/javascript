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
    resultHtml.innerText = "El precio con el descuento es: $" + totalPagar;

}