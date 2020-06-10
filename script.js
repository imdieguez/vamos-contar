//ASSOCIAR ITENS DO HTML PARA SER USADO NO JS.
let ini = document.getElementById("inicio-number");
let fim = document.getElementById("fim-number");
let passo = document.getElementById("passo-number");
let res = document.getElementById("res")
let contarButton = document.getElementById("contar-button");
contarButton.addEventListener("click", contar);

//INICIO DA FUNÇÃO JS.
function contar() {
    //CONDIÇÃO PARA NÃO DEIXAR O INPUT EM BRANCO.
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("[[Erro]] Faltam dados!")
    } else {
        res.innerHTML = "Contando: <br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        //PARA EVITAR TRAVAR O NAVEGADOR SE O PASSO FOR 0.    
        if (p <= 0) {
            alert("Passo inválido! Considerando PASSO 1.")
            p = 1
        }
        if (i < f) {
            //CONTAGEM CRESCENTE
            for(let c = i; c <= f; c+= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //CONTAGEM DECRESCENTE
            for(let c = i; c>= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
    