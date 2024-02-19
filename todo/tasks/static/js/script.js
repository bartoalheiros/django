$(document).ready(function() {

    var deleteBtn = $('.delete-btn');
    var searchBtn = $('#search-btn');
    var searchForm = $('#search-form');

    $(deleteBtn).on('click', function(e) {
        
        // previne que o navegador tome a ação padrão de clicar no botão
        // nesse caso, deletar a task
        e.preventDefault();

        var delLink = $(this).attr('href');
        var result = confirm('Quer deletar esta tarefa?');

        if(result) {
            window.location.href = delLink;
        }

    });

    $(searchBtn).on('click', function() {
        searchForm.submit();
    });

});