$(document).ready(function(){
	$("#curso tr:even").css("background","#00ff00");
	$("#curso tr:odd").css("background","#0000ff");
	//Aplicar num determinado elemento, inicia em 0
	$("#curso tr:nth-child(2)").css("background","#ff0000");
	//Aplicar segundo uma expressão
	$("#curso tr:nth-child(2n)").css("background","#00ff00");
	//******************************************************
	// destaque linha
	// métedo hovel
	/*$("#curso tbody tr").hover(sobre,fora);
	function sobre(){
		$(this).css("color","#dcffdd");
	}
	function fora(){
		$(this).css("color","#000000");
	}*/
	// ou através de class
	/*$("#curso tbody tr").hover(
	function(){
		$(this).addClass("sobre")
	},
	function(){
		$(this).removeClass("sobre");
	});*/
	//Destaque de coluna
	//each - Métedo que percorre e itera ym determinado elemento
	/*$("#curso thead tr th").each(function(index){
		$(this).click(function(){
			console.log("indice: "+index);
			$("td").removeClass("sobre1");
			$(this).parents("thead").siblings("tbody").children("tr").each(function(){
				$(this).children("td:eq("+index+")").addClass("sobre1");
			});
		});
	});*/
	/*$("#curso thead tr th").each(function(index){
		$(this).hover(function(){
			percorre($(this),index)
		});
	});
	function percorre(tthis,i){
		console.log("indice: "+i);
		$("td").removeClass("sobre1");
		tthis.parents("thead").siblings("tbody").children("tr").each(function(){
			$(this).children("td:eq("+i+")").addClass("sobre1");
		});
	}*/
	$("#curso thead tr th").each(function(index){
		var coluna = $(this).text();
		console.log(coluna);
		var pos = index + 1;
		$("tr td:nth-child("+pos+")").hover(function(){
			var valorCelula = $(this).text();
			$(this).addClass("sobre").prepend("<span class='destaca'>"+valorCelula+"</span>");
		},
		function(){
			$(this).removeClass("sobre");
			$(".destaca").remove();
		});
	});
});










