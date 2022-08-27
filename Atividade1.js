
//A função com as operações de cada tipo de triângulo.
const tipoTriangulo = (a,b,c) => {
    if (a < (b + c) && b < (a + c) && c < (a + b)){

        if (a == b && b == c){
            console.log("Triângulo Equilátero");
        }
        else if (a == b || a == c || c == b){
            console.log("Triângulo Isóceles");
        }
        else{
            console.log("Triângulo Escaleno")
        }

    }else{
        console.log("Coe meu nobre, cadê as medidas?")
    }
}


//Teste, para verificar se a função está funcionando.
tipoTriangulo(10,10,10);
tipoTriangulo(10,5,10);
tipoTriangulo(3,4,5);
tipoTriangulo();