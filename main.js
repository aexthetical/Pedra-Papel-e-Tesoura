var jogador=document.getElementById("jogador")
var computador=document.getElementById("computador")
var resultado=document.getElementById("resultado")
function jogar(opcao){
    console.log(opcao)
    jogador.innerHTML=opcao
jogadaIA(
)
mostrarresultado()
}
function jogadaIA(){
    var random= Math.floor(
        Math.random()*3
    )
    console.log(random)
if(
    random==0
){
computador.innerHTML="pedra"
}
if(
    random==1
){
computador.innerHTML="papel"
}
if(
    random==2
){
computador.innerHTML="tesoura"
}
}
function mostrarresultado(){
    var escolhadojogador= jogador.innerHTML
    var escolhacomputador= computador.innerHTML
    if(escolhadojogador==escolhacomputador)
        {
            resultado.innerHTML="empate"
        }else if(
            (escolhacomputador=="pedra" && escolhadojogador=="papel")||
            (escolhacomputador=="papel" && escolhadojogador=="tesoura")||
            (escolhacomputador=="tesoura" && escolhadojogador=="pedra")
        ){
            resultado.innerHTML="você ganhou"
        } else{
            resultado.innerHTML="você perdeu"
        }
}