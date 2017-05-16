$(document).ready(function () {
    var total = $("div.datas ul li").length;
    var dataAtual = new Date().setHours(0, 0, 0, 0);
    var elemento, data, i;
    
    $( "div.datas p.total" ).text( "Total de concertos: " + total );

    for (elemento = $("div.datas ul li").first(), i = 0; i < total; i++, elemento = elemento.next()) {
        data = new Date(elemento.text().substring(0, 10));

        if (data < dataAtual) {
            elemento.addClass("passada");
        }
    }

    $("div.datas ul li.passada").hover(
        function () {
            $(this).removeClass("passada");
        },
        function () {
            $(this).addClass("passada");
        });
});
