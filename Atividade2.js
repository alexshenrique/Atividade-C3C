const calcBhaskara = (ax2,bx,c) => {
    let resultado = [];
    let delta = (bx ** 2) - (4 * ax2 * c);
    
    if(delta < 0){
        return "Delta é negativo, meu consagrado!";
    }


    //Solução da operção(E Math.sqrt é umas das funções matematicas que o JS realiza.
    // Praticamente busca da raiz quadrada de um número.)
    let x1 = (-bx + Math.sqrt(delta)) / 2 * ax2;
    let x2 = (-bx - Math.sqrt(delta)) / 2 * ax2;
    resultado.push(x1);
    resultado.push(x2);
    return resultado;
}

console.log(calcBhaskara(3,-5,12));
console.log(calcBhaskara(1,8,5));