// function declaration
function startCountDown(seconds) {
	var counter = seconds;

	var interval = setInterval(() => {
		console.log(counter);
		counter--;

		if(counter<0){
			clearInterval(interval);
			console.log('time up!!');
		};
	}, 1000);
};

//function calling
startCountDown(15)