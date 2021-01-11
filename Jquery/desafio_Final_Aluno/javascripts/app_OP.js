$(document).ready(function(){
	function converteTextToFloat(text) {
		var num_float = parseFloat(text);
		
		return num_float;
	}

	function floatToText(value) {
		value.toFixed(2);
		return value+"€";
	}

	function escreveTotal(value) {
		floatToText(value);
		$('#total').text(value);
	}

	function calculateTotalProducts() {
		var total = 1;
		$.each(function(index,element){
			var value = $('.price').text();
			var qt = $(':input').val();
			var value_number = converteTextToFloat(value);
			total *= value*qt;
			alert(total);
		});
		total = escreveTotal(total);
		
	}
	$('#calcular').click(function(){
		calculateTotalProducts();
	});
	$('#limpar').click(function(){
		valores_iniciais();
	});
	function valores_iniciais(){
		var total = 1;
		$.each(function(index,element){
			$('.price').text(1);
			$(':input').val(1);
		});
		total = escreveTotal(total);
	};
	$('#novo').click(function(){
		novoElement();
	});
	function novoElement(){
		var tbody = $('tbody');
		var tr = $('<tr class="item accordion">');
		var td = $('<td class="image"><img class="cover" src=""></td><td class="accordion"><div class="product"><a href="#" class="product-link">Xutos & Pontapés </a> <a href="#" class="author-link">o cerco continua</a></div><div class="in-stock">Em stock</div></td><td class="small"><div class="price">o €</div></td><td class="small accordion"><input class="quantity" type="number" value="1" size="3" maxlength="3" min="1" max="10" step="1"></td>');
		
		$.each(function(index,element){
			tr.append(td);
		});
		$('tbody').append(tr);
	};
	$("#ajax").click(function(){
		$.ajax({
			type: "GET",
			url: "cds.json",
			dataType: "json",
			success: function(json){
				//console.log(json);
				var cd = json["cd"];
				var output = "";
				for(var i in cd){
					output += "<tr><td>"+cd[i].img+"</td><td>"+cd[i].product+"</td><td>"+cd[i].author+"</td>"+"<td>"+cd[i].stock+"</td><td>"+cd[i].price+"</td></tr>";
				}
				output += "";
				$("tbody").prepend(output);
			}
		});
		return false;
	});
});















