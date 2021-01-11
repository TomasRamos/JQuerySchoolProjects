/*$(document).ready(function(){
	$("#data").datepicker();
});*/
//Carregamento total da página usando seletor por omissão
$(function(){
	$("#data").datepicker();
	$("#accordion").accordion({
		collapsible:true
	});
});
/*$(function(){
	var fonte = ["ola","adeus","cala-te","não voltes","anda","sai","otorrinilarinologista","loucoº_º","bye","não venhas"];
	$("#auto").autocomplete({
		source: fonte
	});
	$("#modal").dialog({
		width: 320,
		height: 120,
		modal: true,
		buttons :{
			"Confirme!":function(){
				alert("Confirmado!!!");
				$(this).dialog("close");
			},
			Cancel:function(){
				alert("Cancelado,a janela será fechada!!!");
				$(this).dialog("close");
			}
		}
	});
});*/
$(function(){
	$("#abre").bind("click",abrir)({
		
	});
	function abrir(){
		var fonte = ["ola","adeus","cala-te","não voltes","anda","sai","otorrinilarinologista","loucoº_º","bye","não venhas"];
		$("#auto").autocomplete({
			source: fonte
		});
		$("#modal").dialog({
			width: 320,
			height: 120,
			modal: true,
			buttons :{
				"Confirme!":function(){
					alert("Confirmado!!!");
					$(this).dialog("close");
				},
				Cancel:function(){
					alert("Cancelado,a janela será fechada!!!");
					$(this).dialog("close");
				}
			}
		});
	}
});










