let resposta = document.getElementById("resposta")
console.log(resposta)
function calcula(){
    // Leitura dos dados de entrda na caixa chamaada raio
    let base = Number(document.getElementById("base").value)
    console.log(base)

    let altura = Number(document.getElementById("altura").value)
    console.log(altura)


    // fazendo o calculo da area do círculo
    let area = base * altura /2
    console.log("o valor da area é =",area)

    // Mostrando o resultado para o usuario
    resposta.innerHTML = "O valor da área é = " + area.toFixed(2)

}