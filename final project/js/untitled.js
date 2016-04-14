$("#submit-btn").click(function (event){
		event.preventDefault();
		
		var comments = $("textarea").val();
		$('#results').append('<p>' + comments + '</p>');

		$('#comments').css('display', 'none');
	$('#advice').append('<p>Thanks for submitting your comment!</p>');