// Olá Bem vindo ao Meu codigo totalmente bagunçado XD

console.log('%c HI GUYS', `color:yellow`)
console.log(`%c
________  __    __   ______   __    __ 
/        |/  |  /  | /      \ /  |  /  |
$$$$$$$$/ $$ |  $$ |/$$$$$$  |$$ |  $$ |
  $$ |   $$ |__$$ |$$ | _$$/ $$  \/$$/ 
  $$ |   $$    $$ |$$ |/    | $$  $$<  
  $$ |   $$$$$$$$ |$$ |$$$$ |  $$$$  \ 
  $$ |   $$ |  $$ |$$ \__$$ | $$ /$$  |
  $$ |   $$ |  $$ |$$    $$/ $$ |  $$ |
  $$/    $$/   $$/  $$$$$$/  $$/   $$/ 
`, 'color: red')
var subm = document.getElementById('kl') //relaciona 'submit' com a varievel 'subm'

subm.addEventListener('sub()', onsubmit)

function sub() { //Verifica se o campo de pesquisa esta vazio! 
    var bloco = document.getElementById("meio").value.trim();

    if (bloco === '') {
        window.alert('Digite algo na barra de pesquisa')

    } else {
        seach()
    }
}

function seach() { //troca o local de pesquisa de acordo com a opção de buscador que o usuario clicou!
    var formi = document.getElementById('form.seach');//campo de pesquisa!

    var opti = document.querySelector("input[name='btn']:checked")//opção de buscador

    if (opti.value === 'google') {
        formi.action = 'https://www.google.com/search?q='
    }
    else if (opti.value === 'duckduck') {
        formi.action = 'https://duckduckgo.com/?q='
    }
    else if (opti.value === 'Brave') {
        formi.action = 'https://search.brave.com/search?q='
    }
}//FIM