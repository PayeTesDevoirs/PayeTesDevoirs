$(document).ready(function() {
	$('.ajouter').on('click', function() {
		var var1 = prompt('Qui voulez-vous ajouter ?');
		var isPlaying = confirm('ok si il joue contre les profs');
		if (isPlaying) {
			$('ul').innerHTML += '<li class="joue">' + var1 + '</li>';
		} else {
			$('ul').innerHTML += '<li>var1</li>';			
		}
		//var1.li();
		//var1.bold();
		if (isPlaying) {
			alert('écrit ?');
		}
	})
});
	
	
	
