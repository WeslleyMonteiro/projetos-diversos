const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date ()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let s = dateToday.getSeconds()

    if (hr < 10) hr = '0' + hr

    if (min < 10) min = '0' + min

    if (s < 10) s ='0' + s

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = s

})

//Nota só que dá pra usar o if sem o else e para isso nem precisa usar chave para declarar o que fazer no teste lógico

//setInterval: em JavaScript é uma função usada para executar repetidamente uma determinada função em um intervalo de tempo fixo (em milissegundos). Ex 

// setInterval(função, intervalo);

// função: é o código ou função que você quer executar.

// intervalo: é o tempo (em milissegundos) entre cada execução da função. - Não é obrigatório, como foi nesse caso

/* Você pode utilizar em:

1. Relógios e contadores de tempo

2. Atualizações em jogos simples: atualizar posições de objetos, checar colisões ou alterar animações a cada X milissegundos.

3.Requisições automáticas (polling):  precisa checar atualizações de um servidor de tempos em tempos (ex: nova mensagem no chat):

4.Atualizar dados em tempo real

5. Testes e simulações*/