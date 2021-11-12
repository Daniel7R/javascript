function calcularPerimetroCuadrado(){ 
    const ladoCuadrado = document.getElementById("ladoC").value;

    const perimetro = lado => lado * 4;
    const resultadoPerimetro = document.getElementById("resultadoC");
    
    if(ladoCuadrado == ''){
        resultadoPerimetro.innerHTML ="<style>#alertC{color:red;font-weight:bold;}</style><p id='alertC'>Debe llenar el campo requerido</p>"
    }else{
        resultadoPerimetro.innerText = "El perimetro es: " +perimetro(ladoCuadrado); 
    }
}

function calcularAreaCuadrado(){  
    const ladoCuadrado = document.getElementById("ladoC").value;

    const area = lado => lado * lado;
    const resultadoArea = document.getElementById("resultadoC");
    
    if(ladoCuadrado == ''){
        resultadoArea.innerHTML ="<style>#alertC{color:red;font-weight:bold;}</style><p id='alertC'>Debe llenar el campo requerido</p>"
    }else{
        resultadoArea.innerText = "El área es: " +area(ladoCuadrado); 
    }
}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const lado3 = document.getElementById("lado3").value;

    const perimetro = (lado1,lado2,lado3) => Number(lado1) + Number(lado2) + Number(lado3);
    
    const resultadoPerimetro = document.getElementById("resultadoT");

    if(lado1 == ''){
        resultadoPerimetro.innerHTML ="<style> #alert{color:red;font-weight:bold;}#lado1{border:1px solid red;}</style><p id='alert'>Debe llenar los campos requeridos para la operación</p>";  
    }else if(lado2 == ''){
        resultadoPerimetro.innerHTML ="<style> #alert{color:red;font-weight:bold;}#lado2{border:1px solid red;}</style><p id='alert'>Debe llenar los campos requeridos para la operación</p>";  
    }else if(lado3 == ''){
        resultadoPerimetro.innerHTML ="<style> #alert{color:red;font-weight:bold;}#lado3{border:1px solid red;}</style><p id='alert'>Debe llenar los campos requeridos para la operación</p>";  
    }
    else{
        resultadoPerimetro.innerText = "El perimetro es: "+ perimetro(lado1,lado2,lado3) + "cm";
    }
}

function calcularAreaTriangulo(){

    const inputBase = document.getElementById("lado3");
    const inputAltura = document.getElementById("altura");
    const base = inputBase.value;
    const altura = inputAltura.value;

    const area = (b,h) => (b*h)/2;

    const resultadoArea = document.getElementById("resultadoT");
    
    if(lado3 == '' || altura == ''){
        resultadoArea.innerHTML = "<style> #alert{color:red;font-weight:bold;}</style><p id='alert'>Debe llenar los campos requeridos para la operación</p>";    
        if(base == ''){
            resultadoArea.innerHTML = "<style>#lado3{border: 1px solid red}</style>";
        }else{
            resultadoArea.innerHTML = "<style>#altura{border: 1px solid red}</style>";
        }
    }else{
        resultadoArea.innerText ="El área es: "+ area(base,altura) +"cm^2";

    }
}
function calcularPerimetroCirculo(){
    const radio = document.getElementById("radio").value;
    
    const perimetro = radio => radio*2*3.14;

    const resultadoPerimetro = document.getElementById("resultadoCir");
    
    if(radio == ''){
        resultadoPerimetro.innerHTML = "<style>#alertCirculo{color:red;font-weight:bold;} #radio{border: 1px solid red}</style><p id='alertCirculo'>Debe llenar el campo requerido</p>"
    }else{
        resultadoPerimetro.innerText = "El perimetro es: "+ perimetro(radio) + "cm";
    }
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("radio");
    const radio = inputRadio.value;

    const area = r => 3.14 *r*r;

    const resultadoArea = document.getElementById("resultadoCir");
    
        
    if(radio == ''){
        resultadoArea.innerHTML = "<style>#radio{border:1px solid red;}#alertCirculo{color:red;font-weight:bold;}</style><p id='alertCirculo'>Debe llenar el campo requerido</p>"
    }else{
        resultadoArea.innerText = "El área es: " + area(radio) +"cm^2";
    }

}