$('document').ready(function() {
	// var i=1;
	// Start Drawing button functionality
	$('.startButton').mouseup(function() {
		$('.home').hide();
		$('.board').css('display','initial');
		createBoard();
	});

	// Create drawing board
	function createBoard() {
		
		for (i = 0; i < 1024; i++) {
			$(".board").append("<div class=\"square\"></div>");
		}

		//Drawing Function
		$('.square').mouseenter(function() {
			$(this).css('background-color', 'black');
			console.log('success');
		})
	}

	// Drawing function
	// $('.square').mouseenter(fucntion() {
	// 	// $(this).css('background-color', 'black');
	// 	console.log('success');
	// });

	
});