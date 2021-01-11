$(document).ready(function(){
	$("#disJQ").click(function(){
		/*var newLine = $("<br />");
		var newImg = $("<img />",
			{
				src:"Aula 5 - Material/4.jpg",
				style:"width:120px",
				title:"Titulo da imagem",
				click:function(){
					alert("Fui criado pelo Jquery, e tb já fui clicado...");
				}
			});
		var listaNaOrdenada = $("<ul/>").append($("<li/>")).append("Dados inseridos pelo Jquery.");
		$("body").append(newLine).append(newImg).append(listaNaOrdenada);*/
			var listaNaOrdenada = $("<ul/>");
			var dado1LNO = $("<li/>").append("Dado inserido pelo Jquery 1");
			var dado2LNO = $("<li/>").append("Dado inserido pelo Jquery 2");
			var span = $("<span>Element Span</span>");
			listaNaOrdenada.append(dado1LNO).append(dado2LNO).append(span);
			$("body").append(listaNaOrdenada).append(span);
			listaNaOrdenada.append("<li>Dentro Ul, mas no fim</li>");
			listaNaOrdenada.prepend("<li>Dentro Ul, mas no inicio</li>");
			listaNaOrdenada.before("<p>Antes da UL</p>");
			listaNaOrdenada.after("<p>Depois da UL</p>");
			var p = $("<p/>");
			span.wrap(p);//envolver o span num elemento p
			
			$("ul").append($("li").clone());
			//******************Remover**********************
			//$("h2").remove();// remover todas as tags h2
			//Aplicar filtro ao métedo de remoção
			//$("h2").remove("#cab1");
			
			//limpar o conteudo dos p
			//$("p").empty();
			//remover o p que envolve a imagem
			$("img").unwrap();
	}).css("border","2px solid #cdcd00");
});











