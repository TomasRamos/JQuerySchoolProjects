$(document).ready(function(){
	$("#seletudo").click(function(){
		//Usando controlo de formulário
		$(":checkbox[name=casa]").attr("checked","checked");
	});
	$("#tirarsele").click(function(){
		//Usando controlo de formulário
		$(":checkbox[name=casa]").removeAttr("checked");
	});
	//alterna em função do atributo checked
	$("#alterna").change(function(){
		var check = $(":checkbox[name=casa]");
		var notcheck = check;
		if($("#alterna").attr("checked")=="checked")
			$(":checkbox[name=casa]").removeAttr("checked");
		else
			$(":checkbox[name=casa]").attr("checked","checked");
	});
});










