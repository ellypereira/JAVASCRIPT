function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Kid
                img.setAttribute('src', 'foto-bebe-M.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto.png')
            }else {
                //idoso
                img.setAttribute('src', 'velhote.png')
            }

         } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 15) {
                //kid
                img.setAttribute('src', 'foto-bebe.png')
            }else if (idade < 21) {
                   //Jovem
                   img.setAttribute('src', 'jovem.png')
                }else if (idade < 50) {
                    //adulto
                    img.setAttribute('src', 'mikasa.png')
                }else {
                    //idoso
                    img.setAttribute('src', 'idosa.png')
            }
    }
        } res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

    }
