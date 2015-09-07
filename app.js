$('document').ready(function() {
	
	//Check if keydown is active
	var down = false;
	var erase = false;
	$(document).keydown(function() {
		if(event.which == 68) {
			down = true;
		} else if (event.which == 8) {
			erase = true;
		}
	}).keyup(function() {
		if(event.which == 68) {
			down = false;
		} else if (event.which == 8) {
			erase = false;
		}
	})

	// Start Drawing button functionality
	$('.startButton').mouseup(function() {
		$('.home').hide();
		$('.board').css('display','initial');
		createBoard();
	});

	$('#reset').mouseup(function() {
		$('.drawBoard').empty();
		createBoard();
	})

	// Create drawing board
	function createBoard() {
		
		for (i = 0; i < 1024; i++) {
			$(".drawBoard").append("<div class=\"square\"></div>");
		};

		//Drawing Function
		$('.square').mouseenter(function() {
			if(down == true) {
				$(this).css('background-color', 'black');
			} else if(erase == true) {
				$(this).css('background-color', 'white');
			}
			
		});


	}

	// Drawing function
	// $('.square').mouseenter(fucntion() {
	// 	// $(this).css('background-color', 'black');
	// 	console.log('success');
	// });

	
});