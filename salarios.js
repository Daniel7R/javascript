const salarios = [];

function agregarSalario(){
    const inputSalario = document.getElementById("salario");
    const salario = inputSalario.value;

    const alert = document.getElementById("alert");

    if(salario === ''){
        alert.innerHTML = "<style>#badAlert{color:red;font-weight:bold;margin-top: 0px;margin-bottom: 0px;}</style><p id='badAlert'>Debe llenar el campo -.-</p>";
    }else{
    alert.innerHTML = "<style>#goodAlert{color:green;;margin-top: 0px;margin-bottom: 0px;}</style><p id='goodAlert'>Dato agregado correctamente</p>"
    inputSalario.value = '';
    
    salarios.push(salario)
    imprimirSalario()
    }
    inputSalario.focus();

}

function imprimirSalario(){
    const p = document.getElementById("listaSalarios");
    console.log(salarios.length);
    
    p.innerHTML = salarios;

}


function esPar(numero){
    return(numero%2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado=0,siguienteValor){
            return Number(valorAcumulado) + Number(siguienteValor);
        }
    );

    const promedio = sumaLista/lista.length;
    return promedio;
}

function calcularMediana(lista){
    const mitad = parseInt(lista.length/2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad-1];
        const personitaMitad2 = lista[mitad];
    
        const mediana =calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
        return mediana;
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

function salariosOrdenados(lista){
    const salariosSort = lista.sort(
        function(salarioA, SalarioB){
            return salarioA - SalarioB;
        }
    )
    return salariosSort;
}

function determinarMediana(){
    const result = document.getElementById("resultado");

    const SalariosSorted = salariosOrdenados(salarios);
    console.log(SalariosSorted);

    if(salarios.length === 0){
        result.innerHTML = "<style>#bAlert{color:red;font-weigth:bold;}</style><p id='bAlert'>No es posible determinar la mediana</p>";
    }else{
        result.innerText = '';
        result.innerText = "La mediana salarial es: "+ calcularMediana(SalariosSorted);
    }

}