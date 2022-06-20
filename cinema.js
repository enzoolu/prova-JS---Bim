//document.querySelector('#btnCompra').addEventListener('click', function(e) {
//    e.defaultPrevented();
//});
//document.getElementById('btnCompra') = function event(e) {
//    e.preventDefault();
//}

document.getElementById('btnCompra').addEventListener('click', function Pagar(e) {
    e.preventDefault();
    
    let ingresso = document.getElementById('numeroIngressos').value;
    let combo = document.getElementById('combo').value;
    let comboConvertido = parseInt(combo)

    let precoFinal = ((ingresso * 42) + comboConvertido);
    console.log(precoFinal);

    let filme = document.getElementById("filme").value;
    let nomeFilme = document.getElementById("nome-filme");
    nomeFilme.innerHTML = filme;

    let numeroIngressos = document.getElementById("numeroIngressos").value;
    let qtdeIngressos = document.getElementById("qtde-ingressos");
    qtdeIngressos.innerHTML = numeroIngressos + ' ingresso(s)';

    let comboHTML = document.getElementById("combo-tela");
    comboHTML.innerHTML = combo;
});

