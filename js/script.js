var input_altura = document.getElementById('input-altura')
var input_peso = document.getElementById("input-peso")
var btn_calcular = document.getElementById("btn-calcular")
var btn_limpar = document.getElementById("btn-limpar")
var text_resultado = document.getElementById("result-text")

var box_resultado = document.getElementById("box-result")
var btn_close = document.getElementById("btn-close")



btn_calcular.addEventListener("click", function(){
    var valor_Altura = input_altura.value**2;
    var valor_peso = input_peso.value;
    var calculo = valor_peso/valor_Altura
    var calculoformat = calculo.toFixed(2)
    var classificao = ""

    if(valor_Altura > 0 && valor_peso >0){

        if(calculoformat < 18.5){
            classificao = "MAGREZA"
        }else if(calculoformat > 18.5 && calculoformat < 24.9){
            classificao = "NORMAL"
        }else if(calculoformat > 25 && calculoformat < 29.9){
            classificao = "SOBREPESO"
        }else if(calculoformat > 30 && calculoformat < 39.9){
            classificao = "OBESIDADE"
        }else if(calculoformat > 40){
            classificao = "OBESIDADE GRAVE"
        }

        text_resultado.textContent = `Seu IMC é: ${calculoformat}. Você foi classificado como ${classificao}`
        box_resultado.style.display = "flex";
    }else{
        alert("Por favor, insira um valor adequado.")
    }
})

btn_limpar.addEventListener("click",function(){
    input_altura.value = ""
    input_peso.value = ""
})

btn_close.addEventListener("click",function(){
    box_resultado.style.display = "none";
})