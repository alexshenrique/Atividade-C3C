
const limite = document.querySelector("#numero");
const res = document.querySelector("#resposta")
const btn = document.querySelector("#botao");


btn.onclick = () => {
    res.value = repeticao(limite.value);
}



function repeticao(limite){
    let array = [];
    for(let i = 1; i <= limite; i++){
        
         if(i % 5 === 0 && i % 9 === 0){
            array.push("LuidyMoura");
        } 
        else if(i % 5 === 0){
            array.push('Luidy');
        }
        else if(i % 9 === 0){
            array.push('Moura');
        }
        else{
            array.push(i);
        }
        console.log(i);
    }

    return  (array);
}

