function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <  10) {
                //criança
                img.setAttribute('src', 'menino.jpg')
                img.style.width = '150px'
                img.style.height = '150px'
                img.style.borderRadius = '50%'
                img.style.display = 'block'
                img.style.margin = '20px auto'
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'adolescente  homem.jpg')
                img.style.width = '150px'
                img.style.height = '150px'
                img.style.borderRadius = '50%'
                img.style.display = 'block'
                img.style.margin = '20px auto'
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem adulto.jpg')
                img.style.width = '150px'
                img.style.height = '150px'
                img.style.borderRadius = '50%'
                img.style.display = 'block'
                img.style.margin = '20px auto'
            } else {
                //idoso
                img.setAttribute('src', 'idoso homem.jpg')
                img.style.width = '150px'
                img.style.height = '150px'
                img.style.borderRadius = '50%'
                img.style.display = 'block'
                img.style.margin = '20px auto'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <  10) {
                //criança
                img.setAttribute('src', 'menina.jpg')
                img.style.width = '150px'
                img.style.height = '150px'
                img.style.borderRadius = '50%'
                img.style.display = 'block'
                img.style.margin = '20px auto'
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'adolescente mulher.jpg')
                img.style.width = '150px'
                img.style.height = '150px'
                img.style.borderRadius = '50%'
                img.style.display = 'block'
                img.style.margin = '20px auto'
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher.jpg')
                img.style.width = '150px'
                img.style.height = '150px'
                img.style.borderRadius = '50%'
                img.style.display = 'block'
                img.style.margin = '20px auto'
            } else {
                //idoso
                img.setAttribute('src', 'idosa mulher.jpg')
                img.style.width = '150px'
                img.style.height = '150px'
                img.style.borderRadius = '50%'
                img.style.display = 'block'
                img.style.margin = '20px auto'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}