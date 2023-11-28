function verificar(){
    let data = new Date() 
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('#res')
    let fsex = document.getElementsByName('radsex')
    let idade = 0
    let genero = ''
    
    console.log(fsex)
    if (fano.value. length == 0  || fano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente')
    }else{
        idade = ano - Number(fano.value)
        genero = ''
    } if (fsex[0].checked){
        genero = 'homem'
    } else if (fsex[1].checked){
        genero = 'mulher'
    } 
    res.style.textAlign = 'center'
    res.innerHTML = ` detectamos ${genero} com ${idade} anos. `
}
