/*$(document).ready(function(){
	$("#disJQ").click(function(){
		$(":text").keyup(function(){
			$("#cab1").text($(this).val());
		});
	}).css("border","2px solid #cdcd00");
});*/
/*$(document).ready(function(){
	$(":text").bind("keyup",atribui)
	.bind("focus",mudarCor)//por foco
	.bind("blur",mudarCor2);//tirar foco
	function atribui(){
		$("#cab1").text($(this).val());
	}
	function mudarCor(){
		$("#cab1").css("background","#ff00ff");
	}
	function mudarCor2(){
		$("#cab1").css("background","#ffffff");
	}
});*/
/*$(document).ready(function(){
	$("#disJQ").bind("click",function(){
		$(":text").keyup(function(){
			$("#cab1").text($(this).val());
		});
	});
}).css("border","2px solid #cdcd00");*/
$(document).ready(function(){
	$(":text").bind("click",funcaoclicar);
	function funcaoclicar(){
		$(":text").keyup(function(){
			$("#cab1").text($(this).val());
		});
	}
});










