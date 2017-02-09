$(document).ready(function() {
	$('p').on('click', function() {
		if ($(this).hasClass('red')) {
			$(this).removeClass('red');
			$(this).addClass('black');	
			alert('red');		
		} else {
			$(this).addClass('red');
			$(this).removeClass('black');
			alert('black');
		}
	})
});



