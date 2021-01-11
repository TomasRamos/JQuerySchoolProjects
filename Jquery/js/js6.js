$(document).ready(function(){
	$("#disJQ").click(function(){
		var h = $("img").css("height"); // devolver a altura defenida
		//alert(h);
		var w = $("img").css("width");//devolve a altura defenida
		//alert(w);
		//alert("Altura: "+h+" largura: "+w);
		var hImg = $("img").height();
		//alert(hImg);
		//devolver a altura da imagem + o espaçamento aplicado
		var h2Img = $("img").innerHeight();
		//alert(h2Img);
		//devolver a altura da imagem + o espaçamento aplicado + a borda do elemento
		var h3Img = $("img").outerHeight();
		//alert(h3Img);
		//devolver a altura da imagem + o espaçamento aplicado + a borda do elemento + margem
		var h4Img = $("img").outerHeight(true);
		//alert(h4Img);
		//Atribuir propriedades
		//$("img").css("width","200px");
		//conjunto de propriedades
		$("img").css({
			width:"200px",
			height:"50px",
			border:"4px dotted #ff0000",
		});
		var testa = $("img").hasClass();//false
		//alert(testa);
		var testa1 = $("img").hasClass("img");//true
		//alert(testa1);
		
		$("img").removeClass("img");
		$("img").removeAttr("style");
		$("img").addClass("imgClass");
		//Posição dos elementos
		/*
			A diferença entre o offset e position: o offset é relativo ao documento, o position é relativo ao ancentral sobre o qual o elemento posicionado
		*/
		var pt = $("img").position().top;
		var pl = $("img").position().left;
		//alert(pt);
		//alert(pl);
		var poft = $("img").offset().top;
		var pofl = $("img").offset().left;
		//alert(poft);
		//alert(pofl);
		
		//*****************************************************
		$("#cab1").text("Span foi Clicado");
	}).dblclick(function(){
		$("#cab1").text("Span foi Clicado por duplo click").css("border","2px solid #cc00fc");
	}).mouseover(function(){
		$("#cab1").text("Sai de cima rato").css("border","2px solid #00fffc");
	}).mouseout(function(){
		$("#cab1").text("Ainda bem senão teriamos problemas").css("border","2px solid #ff00ff");
	}).mousemove(function(posicao){
		$("#cab1").text("posicao x: "+posicao.clientX+" posicao y: "+posicao.clientY).css("border","2px solid #ff00ff");
	}).css("border","2px solid #cdcd00");
});











