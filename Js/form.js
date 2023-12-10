$(function(){
	$.getJSON("Js/form.json", function(data) {

      	for(var i = 0; i <  data['alunos'].length; i++){
      		$("#TableData").append("<tr>");
			$("#TableData").append("<td scope='col'>" + data['alunos'][i]['Nome'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['alunos'][i]['Idade'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['alunos'][i]['PAIS'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['alunos'][i]['FILHO UNICO'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['alunos'][i]['HOBBY/TIME'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['alunos'][i]['RELIGIÃO'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['alunos'][i]['ESCOLA FUNDAMENTAL'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['alunos'][i]['BAIRRO'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['alunos'][i]['FACULDADE'] + "</td>");
		}

  	});
});

$(function () {

	// Configura um manipulador de eventos para o formulário com o id "pesquisa" quando é enviado
    $("#pesquisa").submit(function (event) { 

		// Impede o comportamento padrão de recarregar a página ao enviar o formulário
        event.preventDefault(); 

		// Obtém os valores dos campos de entrada e converte para maiúsculas
        var nome = $("#nome").val().toUpperCase();
        var idade = $("#serie").val().toUpperCase();
		var bairro = $("#topico").val().toUpperCase();

		// Limpa o conteúdo da tabela antes de adicionar os novos resultados
        $("#TableData").empty(); 

		// Faz uma solicitação para obter o conteúdo do arquivo JSON
        $.getJSON("Js/form.json", function (data) { 

			// Itera sobre cada objeto na lista 'alunos' do JSON
            data['alunos'].forEach(function (aluno) {

				// Verifica se o nome e a marca fornecidos correspondem aos dados do automóvel
                if ((nome === '' || aluno['Nome'].includes(nome)) &&
                    (idade === '' || aluno['Idade'].includes(idade))&&
					(bairro === '' || aluno['BAIRRO'].includes(bairro))
                    ) {

					// Adiciona uma nova linha à tabela
                    $("#TableData").append("<tr>");

					// Itera sobre cada propriedade do objeto automóvel
                    for (var prop in aluno) {
						// Adiciona uma célula à linha da tabela com o valor da propriedade
                        $("#TableData").append("<td scope='col'>" + aluno[prop] + "</td>");
                    }
					// Fecha a linha da tabela
                    $("#TableData").append("</tr>");
                }
            });
        });
    });  
});

			   			






				