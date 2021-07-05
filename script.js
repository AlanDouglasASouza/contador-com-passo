function contar(){
    var inicio = document.getElementById('txt1')
    var fim = document.getElementById('txt2')
    var passo = document.getElementById('txt3')
    var res = document.querySelector('div#res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Dados incompletos')
    } else {

        res.innerHTML = 'Contando: '
        var ini = Number(inicio.value)
        var fm = Number(fim.value)
        var ps = Number(passo.value)
    if (ini < fm) {
        
        for (var i = ini; i <= fm; i += ps) {
        res.innerHTML += i + ' \u{1F449} '
       }
    }else if (ini > fm) {
        
        for (var i = ini; i <= fm; i -= ps) {
            res.innerHTML -= i + ' \u{1F449} '
       } 
     }
    }
res.innerHTML += ' \u{1F4AB} '
}





