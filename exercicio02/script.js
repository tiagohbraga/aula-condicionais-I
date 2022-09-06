let idade = Number(prompt('Digite sua idade'))
let ensinoMedio = confirm('Concluiu o ensino medio?')
let isCursandoOutraFaculdade = confirm('Não cursa alguma faculdade?')

if(idade>=18){
    alert('Pessoa maior de idade!')
    console.log('Pessoa maior de idade!')
}else{
	alert('Menor de idade!')
    console.log('Menor de idade!')
}

if(ensinoMedio){
    alert('Terminou o ensino medio')
    console.log('Terminou o ensino medio')
}else{
    alert('Não terminou o ensino medio')
    console.log('Não terminou o ensino medio')
}

if(isCursandoOutraFaculdade){
    alert('Não esta cursando a faculdade')
    console.log('Não esta cursando a faculdade')
}else{
    alert('Está cursando a faculdade')
    console.log('Está cursando a faculdade')
}