//variáveis são espaços na memória para guardar algum valor
let pesopeca = 50

//pesoPeca - Camel case
//peso_peca - snake case
//PesoPeca - pascal case

if(pesopeca > 100) {
 console.log("Peso maior que 100g")

}else{
    console.log("Peso insuficiente, não será possível cadastrar")
}

let numpecas = 9

if (numpecas < 10) {
    console.log("Podemos cadastar a peça")
} else {
    console.log("Não há espaço suficiente. Peça não pode ser cadastrada")
}

let nomepeça = "Disco de freio"
console.log("Comprimento do nome da peça: ",nomepeça.length)

if (nomepeça.length < 3) {
    console.log("Comprimento de nome insulficiente, não pode ser cadastrado")
} else {
    console.log("Peça cadastrada")
}