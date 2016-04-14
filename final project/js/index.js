$(document).ready(function() {
	$('#emotion-input').change(function() {
		event.preventDefault();
	$(".destination").removeClass("active").addClass("vacation"); 

	var feeling = $('#emotion-input').val();



		if (!$("p.thanks").hasClass("vacation")) {
			$("p.thanks").toggleClass("vacation");
		}

// Finds the right destination and shows it by adding the "active" class	
	if (feeling === 'happy') {
		$("#happy").addClass("active");
		$('textarea').removeClass("responsive");
		$('#happy textarea').addClass("responsive");

	}

	else if (feeling === 'adventurous') {
		$("#adventurous").addClass("active");
		$('textarea').removeClass("responsive");
		$('#adventurous textarea').addClass("responsive");
	} 

	else if(feeling === 'hungry') {
		$("#hungry").addClass("active"); 
		$('textarea').removeClass("responsive");
		$('#hungry textarea').addClass("responsive");
	
	}

	else if(feeling === 'relaxed') {
		$("#relaxed").addClass("active"); 
		$('textarea').removeClass("responsive");
		$('#relaxed textarea').addClass("responsive");
	
	}

	else if(feeling === 'thoughtful') {
		$("#thoughtful").addClass("active"); 
		$('textarea').removeClass("responsive");
		$('#thoughtful textarea').addClass("responsive");
	
	}

	else if (feeling === 'select-one'){
		$('#select-one').addClass("active");

	}	
	});
	

// Shows the comments form 	
	$(".click").click(function(){
		// event.preventDefault();
	$('.comments').toggleClass("vacation"); 
	});

// Replaces the form with a thank you message afer submit 
	$(".submit-btn").click(function (event){
		event.preventDefault();
		
		var comments = $("textarea.responsive").val();
		$('#results').append('<p>' + comments + '</p>');

// Hides the comment box
		$('.comments').toggleClass("vacation");
		

		$('.thanks').toggleClass('vacation');


});

});






