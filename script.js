 
 
jQuery(document).ready(function( $ ) { 



// Lesson

	var input_field = $('#input_field');
	//var output_field = $('#output_field');

	//var reg_exp = new RegExp("template", "flags");
	//var regexp = new RegExp("шаблон", "флаги");

	var reg_exp_2 = /template/gmi;

	var str_1 = "Front-end разработка - это моя новая основная профессия!";
	var reg_exp_3 = /Front-end/;
	var reg_exp_4 = /ра/g;


	//alert ( str_1.search(reg_exp_3) );

	//alert ( 'Метод search находит "ра": ' + str_1.search(reg_exp_4) );
	//alert ( 'Метод match находит "ра": ' + str_1.match(reg_exp_4) );

	var result = str_1.match(reg_exp_4); 	// массив с совпадениями

	//alert(result.length );
	//alert();

	//alert(str_1.split('-')); 	// разбивает

	var new_str = str_1.replace(/-/g, '=');
	//alert(new_str);
	
	
// Project

	var input_field = $('#input_field');
	var output_field = $('#output_field');	
	

	
	
	$('.button-action').on('click', function(){
		
		var input_text = input_field.val();
		//alert(input_text);
	
		var ouput_text = input_text.replace(/"/g, '\'');		
		output_field.val(ouput_text);
		
	});
	
	
	
});