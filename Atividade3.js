//Sistemas de Notas

//Chamando os elementos da tela.
const nota = document.querySelector("#nota");
const res = document.querySelector("#resultado");
const btn = document.querySelector("#botao");



btn.onclick = () => {
    if(nota.value == ""){
        nota.focus();
    }else{
        res.value = calcNota(nota.value,);
    }
}


function calcNota(notaAluno){
    if(notaAluno < 38){
        return "Você foi reprovado.", notaAluno;
    }
    else if(notaAluno % 5 < 2){
       let arrendondamentoBaixo = (notaAluno % 5) >= 2.5 ? (notaAluno / 5) * 5 + 5 : (notaAluno / 5) * 5;
        return "Você foi aprovado!, Nota: " + arrendondamentoBaixo;
    }
    else{
        let arrendondamentoCima = Math.ceil(notaAluno/5)*5;
        return("Você foi aprovado!, Nota:" + arrendondamentoCima);
    }
}





/*const calcNota = (nota) => {
    nota = Number.parseFloat(nota);

    if(nota < 38){
        return "Você foi reprovado";
    }else if(nota % 5 < 2){
        (nota % 5) >= 2.5 ? (nota/5) * 5 + 5 : (nota / 5) * 5;
        return "Aluno aprovado";
    }


    
}
*/