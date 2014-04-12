$(":button").click(function() {
	var isbn = this.id;
	alert('About to report lost on ISBN ' + isbn);
	var putUrl = "/library/v1/books/"+ isbn +"?status=lost";
	
	var ajaxCall = $.ajax({
	
	    url: putUrl,
	    type: "PUT",
	    dataType: "json",
	    success: function(response) {
	        alert(JSON.stringify(response));
	        $('#'+isbn+'bookStatus').html("lost");
	        $('#'+isbn).prop("disabled",true);
	    }
		
	});
});


