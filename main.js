$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        
        const nomeTarefa = $('#nome-tarefa').val();
        
        const novoItem = $('<li style="display: none;"></li>');
        
        $(novoItem).text(nomeTarefa);
        
        $(novoItem).appendTo('ul');
        
        $(novoItem).fadeIn(200);
        
        $('#nome-tarefa').val('');
    });

    $('ul').on('click', 'li', function(){
        $(this).addClass('feito');
    });
});