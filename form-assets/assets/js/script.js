const passwordIcons = document.querySelectorAll('.password-icon')

//Para trocar dos *** para a senha em si
passwordIcons.forEach (icon =>{
    icon.addEventListener ('click', function (){
        const input = this.parentElement.querySelector('.form-control')
        input.type = input.type ==='password' ? 'text' : 'password';
        this.classList.toggle('fa-eye');
    })
})

// this.parentElement = pega o elemento pai do ícone (geralmente uma div que contém o input e o ícone).
// Dentro desse pai, ele procura o elemento com a classe .form-control — que é onde normalmente está o input da senha.

// operaçao ternaria - input.type ==='password' ? 'text' : 'password';

// Se o tipo do input for password, muda para text (para mostrar a senha).

// Se já for text, muda para password (para ocultar a senha).

// O método toggle em JavaScript é usado para adicionar ou remover uma classe de um elemento HTML, de forma alternada.

// O que ele faz:
// Se o elemento já tiver a classe, ele remove.

// Se o elemento não tiver a classe, ele adiciona.

// Uso comum:
// O toggle é muito usado para:

// Mostrar/ocultar menus

// Trocar temas (claro/escuro)

// Alterar ícones ou cores

// Expandir/colapsar seções