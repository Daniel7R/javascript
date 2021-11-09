
function calcularPerimetroCuadrado(){
    
    const ladoCuadrado = document.getElementById("ladoC").value;

    const perimetro = lado => lado * 4;
    const resultadoPerimetro = document.getElementById("resultadoC");
    resultadoPerimetro.innerText = "El perimetro es: " +perimetro(ladoCuadrado); 
}

function calcularAreaCuadrado(){
    
    const ladoCuadrado = document.getElementById("ladoC").value;

    const area = lado => lado * lado;
    const resultadoArea = document.getElementById("resultadoC");
    resultadoArea.innerText = "El área es: " +area(ladoCuadrado); 

}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const lado3 = document.getElementById("lado3").value;

    const perimetro = (lado1,lado2,lado3) => lado1 + lado2 + lado3;

    const resultadoPerimetro = document.getElementById("resultadoT");
    resultadoPerimetro.innerText = "El perimetro es: "+ perimetro(lado1,lado2,lado3);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("lado3").value;
    const altura = document.getElementById("altura").value;

    const area = (b,h) => (b*h)/2;

    const resultadoArea = document.getElementById("resultadoT");
    resultadoArea.innerText ="El área es: "+ area(base,altura);

}
function calcularPerimetroCirculo(){
    const radio = document.getElementById("radio").value;
    
    const perimetro = radio => radio*2*3.14;

    const resultadoPerimetro = document.getElementById("resultadoCir");
    resultadoPerimetro.innerText = "El perimetro es: "+ perimetro(radio)
}

function calcularAreaCirculo(){
    const radio = document.getElementById("radio").value;

    const area = r => 3.14 *r*r;

    const resultadoArea = document.getElementById("resultadoCir");
    resultadoArea.innerText = "El área es: " + area(radio);
}