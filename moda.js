const lista = [2,2,4,5,671,21,21,21,21,21,12];

for(let i=0; i<lista.length;i++){
    for(let j=0; j<lista.length;j++){
        if(lista[j]>lista[j + 1 ]){
            aux = lista[j];
            lista[j] = lista[j+1];
            lista[j+1] = aux;
        }
    }
}

let listaRepeticiones=[];
let listaNumeros=[]; 

for(let i = 0;i<lista.length;i++){
    c=0;
    for(let j=0;j<lista.length;j++){        
        if(lista[i] === lista[j]){
            
            c++;
        }
    }
    if(!listaNumeros.includes(lista[i])){
        listaRepeticiones.push(c)
        listaNumeros.push(lista[i])
    }
}

let indiceMayor = -1;

for(let i=0;i<listaRepeticiones.length;i++){
    
    if(i === 0){
        indiceMayor = i;
    }else if(listaRepeticiones[i]>listaRepeticiones[indiceMayor]){
        indiceMayor= i;
    }
}

console.log("La moda es: "+ listaNumeros[indiceMayor] +" la cantidad de veces que aparece es: "+ listaRepeticiones[indiceMayor]);
