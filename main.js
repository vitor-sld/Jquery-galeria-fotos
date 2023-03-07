$(document).ready(function () {


    $('header button').click(function () {
        $('form').slideDown();
    })
    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })

    $('form').submit(function (e) {
        e.preventDefault();

        const enderecoUrl = $('#endereco-imagem-nova').val();
        const novaFoto = $('<li style="display:none"> </li>')
        const imgconteudo = $(`<img src="${enderecoUrl}" title="Ver imagem em tamanho real" alt="imagem adicionada pelo usuário">`).appendTo(novaFoto)
        
        const conteudoLI = $(
        `
        <div class="verMais">
        <a href="${enderecoUrl}" target="_blank">Ver imagem em tamanho real</a>
        </div>
        `
        ).appendTo(novaFoto);
        novaFoto.appendTo('ul')
        novaFoto.fadeIn(1000);git commit -m "first commit"
    })

})