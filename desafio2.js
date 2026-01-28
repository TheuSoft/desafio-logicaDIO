let resultado = calcularNivel(95, 30);


function calcularNivel(saldoVitorias,saldoDerrotas) {

    let saldo = saldoVitorias - saldoDerrotas;
    let nivel = "";

    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    }
    else if (saldoVitorias > 10 && saldoVitorias <=20){
        nivel = "Bronze";
    }
    else if(saldoVitorias > 20 && saldoVitorias <=50){
        nivel = "Prata";
    }
    else if(saldoVitorias > 50 && saldoVitorias <=70){
        nivel = "Ouro";
    }
    else if(saldoVitorias > 70 && saldoVitorias <=80){
        nivel = "Platina";
    }
    else if(saldoVitorias > 80 && saldoVitorias <=90){  
        nivel = "Ascendente";
    }
    else if(saldoVitorias > 90 && saldoVitorias <=100){
        nivel = "Imortal";
    }
    else {
        nivel = "Radiante";
    }
    return {
        saldo: saldo,
        nivel: nivel
    };
}


console.log("O Herói tem de saldo de vitorias " + resultado.saldo + " e está no nível de" + resultado.nivel);