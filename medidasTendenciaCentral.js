var datosAgregados = [];

function vaciarDatos(){
    datosAgregados = [];

    const lista = document.getElementById("listaDatos");
    lista.innerText = '';

    const mensaje = document.getElementById("alert1");
    mensaje.innerHTML= "Datos vaciados correctamente 7u7";

}

function procesarDatos(){
    const inputDato = document.getElementById("dato");
    const btnAgregar = document.getElementById("add");
    dato = inputDato.value;
    
    const alert = document.getElementById("alert1");
    if(dato != ''){
        agregarDato(dato);
        alert.innerHTML = "<style>#goodAlert{color:green;with:520px;}</style><p id='goodAlert'>Dato agregado correctamente</p>"
        inputDato.value = '';
        mostrarDatosPantalla(datosAgregados);
    }
    else{
        alert.innerHTML ="<style>#badAlert{color:red;font-weight:bold;}#dato{border:1px solid red;}</style><p id='badAlert'>Debe ingresar un dato en el campo</p>"
    }

    inputDato.focus();
    return datosAgregados;

}

function agregarDato(dato){
    datosAgregados.push(dato);
    return datosAgregados;
}
function mostrarDatosPantalla(datosAgregados){
    const listaHtml = document.getElementById('listaDatos'); 
    
    listaHtml.innerText = datosAgregados.toString();
}

//Hallar promedio
function promedio(){
    const mostrar = document.getElementById("resultado");
    if(datosAgregados.length === 0){
        mostrar.innerHTML = "<style>#alert{color:red;font-weight:bold;}</style><p id='alert'>Debe ingresar primero los datos ._.</p>"
    }
    else{
        const sumaLista= datosAgregados.reduce(
            function (valorAcumulado= 0,nuevoElemento){
                var suma = Number(valorAcumulado) + Number(nuevoElemento); 
                return suma;
            }
        )
        
        let longitud = datosAgregados.length;
        
        let prom = sumaLista / longitud;
        
        mostrar.innerText = '';
        mostrar.innerText ="El promedio de los datos es: " + prom;
    }
}

//Hallar Mediana
function mediana(){
    const show = document.getElementById("resultado");
    if(datosAgregados.length === 0){
        show.innerHTML = "<style>#alert{color:red;font-weight:bold;}</style><p id='alert'>Debe ingresar primero los datos ._.</p>"
    }else{
        show.innerText = "La mediana de los datos es: "+ calcularMediana(datosAgregados);
    }
}

function esPar(numero){
    return (numero % 2 === 0);
}

function medianaReturn(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        
        const promedioMediana = (pers1,pers2) =>{
            //Hallo el promedio de los 2 datos que son la mediana
            let pr = (Number(pers1) + Number(pers2))/2;
            return pr;
        }

        const mediana = promedioMediana(personaMitad1,personaMitad2);

        return mediana;
    }else{
        const personaMitad = lista[mitad];

        return personaMitad;
    }
}

function calcularMediana(){
    const datosOrdenados = datosAgregados.sort(
        function(primerDato, siguienteDato){
            return primerDato - siguienteDato;
        }
    )
    
    return medianaReturn(datosOrdenados);
}


function moda(){
    
    const show = document.getElementById("resultado");
    
    if(datosAgregados.length === 0){
        mostrar.innerHTML = "<style>#alert{color:red;font-weight:bold;}</style><p id='alert'>Debe ingresar primero los datos ;-;</p>"
    }else{
        show.innerText = "La moda es: " + calcularModa();
    }

}


function calcularModa(){
    
    const datosOrdenados = datosAgregados.sort(
        function(primerDato,siguienteDato){
            return primerDato -siguienteDato;
        }
    )

    console.log(datosOrdenados);

    let listaRepeticiones = [];
    let listaNumeros = [];
    
    for(let i = 0; i < datosOrdenados.length; i++){
        let c = 0;
        for(let j = 0; j < datosOrdenados.length; j++){
            if(datosOrdenados[i] === datosOrdenados[j]){
                c++;
            }
        }

        if(!listaNumeros.includes(datosOrdenados[i])){
            
            listaNumeros.push(datosOrdenados[i]);
            listaRepeticiones.push(c);
        }
    }

    let indiceMayor = -1;

    for(let i = 0; i < listaRepeticiones.length; i++){

        if(i===0){
            indiceMayor = i;
        } else if(listaRepeticiones[i] > listaRepeticiones[indiceMayor]){
            indiceMayor = i;
        }
    }

    return listaNumeros[indiceMayor];
}
