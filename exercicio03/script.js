let nacionalidade = prompt('Escreva aqui sua nacionalidade').toLowerCase()
let respostaNacionalidade = ['brasileira', 'argentina', 'uruguaia', 'chilena', 'colombiana']

if(respostaNacionalidade.includes(nacionalidade)){
    alert(`Sua nacionalidade é ${nacionalidade}`)    
}else{
    alert('Nacionalidade não encontrada')   
}



// if(nacionalidade === 'brasileira'){
//     console.log('Brasileira')
// }else if(nacionalidade === 'argentina'){
//     console.log('Argentina')
// }else if (nacionalidade === 'Uruguaia'){
//     console.log('Uruguaia')
// }else if (nacionalidade === 'Chilena'){
//     console.log('Chilena')
// }else if (nacionalidade === 'Colombiana'){
//     console.log('Colombiana')
// }else{
//     alert( "nacionalidade não encontrada" )
//     console.log( "nacionalidade não encontrada" )
// }