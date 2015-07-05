var main = function() {
	// alert("main ready");

	$("a").on('click',function(e) {
	   e.preventDefault(); // stops link form loading
	   var href = $(this).attr('href');
	   if(href != null) {
			$('.content').hide(); // hides all content divs
	   		$( href).show(); //get the href and use it find which div to show
	
	   }
	});
};


$( document ).ready(main);





