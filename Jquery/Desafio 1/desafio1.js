$(function(){
	//ex 1 e 2- ocupação do aviao
	var a1 =[
				["0","0","0","0","0"],
				["0","0","0","0","0"],
				["0","0","0","0","0"],
				["0","0","0","0","0"],
				["0","0","0","0","0"]
			];
	//Ex 3
	$("#ocup").click(function(){
		ocupar(a1);
	});
	//funcao ocupar
	function ocupar(a){
		contspan = 0;
		for(var i=0;i < a.length;i++){
			for(var j=0;j < a[i].length;j++){
				if(a[i][j] == "0"){
					$("div p span:eq("+contspan+" )").addClass("borda");
					a[i][j] = "1";
					contspan++;
					return;
				}else contspan++;
			}
		}
	}	
	
	
	$("#lib").click(function(){
		liberar(a1);
	});
	//funcao ocupar
	function liberar(a){
		contspan = 0;
		for(var i=0;i < a.length;i++){
			for(var j=0;j < a[i].length;j++){
				if(a[i][j] == "1"){
					$("div p span:eq("+contspan+" )").removeClass("borda");
					a[i][j] = "0";
					contspan++;
					return;
				}else contspan++;
			}
		}
	}

	//EX 5 
	$("#atualiza").click(function(){
		atualizar(a1);
	});
	
	function atualizar(){
		$("div p span").hide("fast");
		ocupar(a1);
		$("div p span").fadeIn("slow");
		
	}
	
	//EX6
	$("div p span").each(function(index){
		$(this).click(function(){
			percorrer(index);
		});
	});
	//função que trata o evento do click no span que foi clicado
	function percorrer(index){
		var count = 0;
		var estado = $("span:eq("+index+")").hasClass("borda");
		var toggleEstado = $("span:eq("+index+")");
		
		if(estado){
			toggleEstado.removeClass("borda");
			procurar(index,"0");
		}else{
			toggleEstado.addClass("borda");
			procurar(index,"1");
		}
		console.log(a1);
	
	}
	//função que percorre o array
	function procurar(index, estado){
		count = 0;
		for(var y=0;y < a1.length;y++){
			for(var w=0;w < a1[y].length;w++){
				if(count == index)
					a1[y][w] = estado;
				count++;
			}
		}
		mostrar(a1);
	}
	//usando o for
	/*function mostrar(a){
		$("#lista").remove();
		var html_corpo = $('<div id="lista">');
		for(var i=0; i < a.length;i++){
			var p = $('<p>');
			for(var j=0; j < a[i].length;j++){
				//alert(a[i][j]);
				p.append('<span>'+a[i][j]+'</span>');
			}
			html_corpo.append(p);
		}
		$("body").append(html_corpo);
	}*/
	
	//usando o métedo $.each()
	/*function mostrar(a){
		$('#lista').remove();
		var html_corpo = $('<div id="lista">');
		$.each(a,function(index,element){
			var p = $('<p>');
			html_corpo.append(p);
			$.each(a[index], function(li,elem){
				p.append($('<span>',{text: elem}));
				console.log(elem);
			});
		});
		$("body").append(html_corpo);
	}*/
	
	//Usando .each
	function mostrar(a){
		var html_corpo = $("#lista");
		$("#lista p").each(function(index){
			$(this).find('span').each(function(ii){
				$(this).html(a[index][ii]);
			});
		});
	}
});










