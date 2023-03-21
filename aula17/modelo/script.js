let numeros = []

function add_numero(){
    const id_numero = document.querySelector('#numero').value
    const id_tabela = document.querySelector('#tabela')

    numeros.push(Number(id_numero))
    id_tabela.innerHTML += `Valor ${id_numero} adicionado.\n`
}

function finalizar(){
    if (numeros.length == 0){
        window.alert('[ERRO!] Adicione valores.')
    } else {
        const id_resultado = document.querySelector('#resultado')
        id_resultado.innerHTML = ''

        const numero_maior = numeros.reduce(function(prev, current) { 
            return prev > current ? prev : current; 
        });

        const numero_menor = numeros.reduce(function(prev, current) { 
            return prev < current ? prev : current; 
        });

        var soma_valores = 0
        for (cont in numeros){
            soma_valores += numeros[cont]
        }

        id_resultado.innerHTML += `Ao todos temos ${numeros.length} valores.<br>`
        id_resultado.innerHTML += `O maior número é ${numero_maior}.<br>` 
        id_resultado.innerHTML += `O menor número é ${numero_menor}.<br>` 
        id_resultado.innerHTML += `A soma dos valores é ${soma_valores}.<br>` 
        id_resultado.innerHTML += `A média dos valores é ${soma_valores/numeros.length}`
    }
 }


