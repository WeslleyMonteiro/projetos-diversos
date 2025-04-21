const form = document.getElementById('form')

form.addEventListener('submit',function(event){
    event.preventDefault() // Vai impedir o carregamento da página quando for mandado o submit ou seja as informações ainda vão ficar na pg
    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value

    const bmi =(weight/(height*height)).toFixed(2)

    const value = document.getElementById('value')
    let description ='' //Está vazia porque terá uma descrição para cada teste if

    value.classList.add('attention') // vai adicionar essa classe que está no css que deixa o resultado que aparece em vermelho- veja CSS

    document.getElementById('infos').classList.remove('hidden') //removendo a classe hidden a div que tem ela ficará exposta agora

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!'
    } else if (bmi >= 18.5 && bmi <=25){
        description = 'Vocês está no peso ideal!'
        value.classList.remove('attention')
        value.classList.add('normal') // vai trocar de classe pra que deixa a letra verde
    } else if (bmi >= 25 && bmi <=30){
        description = 'Cuidado! Você está com sobrepeso!'
    } else if (bmi >= 30 && bmi <=35){
        description = 'Cuidado! Você está com obesidade moderada!'
    } else if (bmi >= 35 && bmi <=40){
        description = 'Cuidado! Você está com obesidade severa!'
    } else {
        description = 'Cuidado! Você está com obesidade morbida!'
    }

    value.textContent = bmi.replace('.', ',')
    document.getElementById('description').textContent = description // para aparecer o texto do resultado
})