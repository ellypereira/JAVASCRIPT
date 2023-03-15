function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - fano.value
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'fotobebe-M.png')
        } else if ( idade < 21) {
            //Jovem
            img.setAttribute('src', 'fotojovem.M.png')
        } else if ( idade < 50) {
            //Adulto
            img.setAttribute('src', 'fotoadulto.png')
        } else {
            //Idoso
            img.setAttribute('src', 'fotoidoso.M.png')
        }
    } else if (fsex[1].checked){
        gênero = 'Mulher'
        if (idade >=0 && idade < 10){
            //Criança
            img.setAttribute('src', 'fotobebe-F.png')
        } else if ( idade < 21){
            //Jovem
            img.setAttribute('src', 'fotojovem.F.png')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'fotoadulta.png')
        } else {
            //Idoso
            img.setAttribute('src', 'fotoidosa.F.png')
        }
    }res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }
}