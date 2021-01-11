$(document).ready(function(){
	$("span").css("border","2px solid #00ff00");
	$("#esconde").click(function(){
		//$("img").hide();
		//$("img").hide("slow");
		//$("img").hide("normal");
		//$("img").hide("fast");
		$("img").hide(2000);//tempo em milisegundos
	});
	$("#mostra").click(function(){
		//$("img").show();
		//$("img").show("slow");
		//$("img").show("normal");
		//$("img").show("fast");
		$("img").show(2000);
	});
	$("#alterna").click(function(){
		//$("img").toggle();
		//$("img").toggle("slow");
		//$("img").toggle("normal");
		//$("img").toggle("fast");
		$("img").toggle(2000);
	});
	//**** Opacidade
	$("#opacidadeS").click(function(){
		//$("img").fadeOut("slow");
		$("img").fadeOut("fast");
	});
	$("#opacidadeE").click(function(){
		//$("img").fadeIn("slow");
		$("img").fadeIn("fast");
	});
	$("#opacidade50").click(function(){
		$("img").fadeTo("slow","0.5");// varia entre 0 e 1
	});
	$("#opacidadeA").click(function(){
		$("img").fadeToggle("slow");// varia entre 0 e 1
	});
	//----------------------------------------------------------
	$("#deslocaC").click(function(){
		$("img").slideUp("slow");
	});
	$("#deslocaB").click(function(){
		$("img").slideDown("slow");
	});
	$("#deslocaA").click(function(){
		$("img").slideToggle("slow");
	});
});










