$('#blakh').hide('fast', function() {

});


$( "#join" ).click(function() {
	document.body.style.backgroundImage = "url('backori.jpg')";
	$("#gridCont").fadeOut('slow', function() {
	});
	$("#blakh").fadeIn('slow', function() {
	});
});




function makeHTML(theData){
	var htmlString = '<ol>';
	theData.forEach(function(d){				//loop
		htmlString += '<li>' + d.word + ' is hosted by ' + d.user  + '<br>Description: ' + d.desc + '<br>Date: ' + d.date + '<br>The event is from ' + d.startT +' to ' + d.endT + '<br>Place: ' + d.where + '<br>Preffered contact method: ' + d.contWay + '<br>Contact details: ' + d.contDets + '</li>';
	});
	htmlString += '</ol';
	return htmlString;


}


			// user: userName,   		// this is the decision you want to make for your final project
			// word: favWord,
			// desc: description,
			// pple: peopleNeeded,			// what you want to save
			// date: timeStamp,
			// startT: startTime,
			// endT: endTime,
			// where: place,
			// contWay: contactMethod,
			// contDets: contactDetails

			// user: userName,   		// this is the decision you want to make for your final project
			// word: favWord,
			// desc: description,
			// pple: peopleNeeded,			// what you want to save
			// date: timeStamp,
			// start: startTime,
			// end: endTime,
			// where: place,
			// contWay: contactMethod,
			// contDets: contactDetails 

// function makeHTML(theData){
// 	var htmlString
// 	theData.forEach(function(d){				//loop
// 		htmlString += '<button class="collapsible">' + d.word + '</button><div class="content"><p>' + d.user  + '</p></div>';
// 	});
// 	return htmlString;-
// 	console.log(d.user)

// }





// var coll = $('.collapsible');
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }




function getWord(term){
	$.ajax({
		url: '/api/word/' + term,
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log(data);
			alert("Oh No! Try a refresh?");
		},
		success: function(data){
			console.log("WooHoo!");
			console.log(data);

			var theData = data.map(function(d){
				return d.doc;
			});
			var str = '';
			if (theData.length === 1){
				str = " time";
			}
			else{
				str = " times";
			}
			$('body').append('<h2>This word has been favorited ' + theData.length + str + '!</h2>');
			var htmlString = makeHTML(theData);
			$('body').append(htmlString);
		}
	});
}

//step 1 get
//getting all data to show on the page every time the page loads
function getAllData(){
	$.ajax({
		url: '/api/all',		//directs you to the app.js all data json file
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log(data);
			alert("Oh No! Try a refresh?");
		},
		success: function(data){
			console.log("We have data");
			console.log(data);
			//Clean up the data on the client
			//You could do this on the server
			var theData = data.map(function(d){				//looping through the data, and giving you cleaner data
				return d.doc;
			});
			var htmlString = makeHTML(theData);
			$('body').append(htmlString);
		}
	});
}

//second step: posting to our server app.js
function saveData(obj){
	$.ajax({
		url: '/save',         		//it's getting sent to the save to the app.js server (our server)
		type: 'POST',				//we are sending an ajax post to the server
		contentType: 'application/json', 		// get ready, it's a json type
		data: JSON.stringify(obj),  //we have to stringify it
		error: function(resp){
			console.log("Oh no...");
			console.log(resp);
		},
		success: function(resp){
			console.log('WooHoo!');
			console.log(resp);
			var htmlString = '<li>' + obj.user + ' : ' + obj.word + '</li>';
			$('ol').append(htmlString);
		}
	});
}

$(document).ready(function(){
	if (page === 'get all data'){
		$('#container').show();
		getAllData();
	}
	else{
		$('#container').hide();
		getWord(page);
	}

//first step: client entering the data
	$('#enterButton').click(function(){
		var userName = $("#userName").val() || 'ME'; 
		var favWord = $("#favWord").val() || 'test';
		var description = $("#description").val() || 'event';
		var peopleNeeded = $("#peopleNum").val() || "0";
		var eventDate = $("#date").val();
		var startTime = $("#from").val();
		var endTime = $("#to").val();
		var place = $("#place").val();
		var contactMethod = $("#conMethod").val();
		var contactDetails = $("conNum").val();



		var timeStamp = new Date();
		//Create data object to be saved
		var data = {
			user: userName,   		// this is the decision you want to make for your final project
			word: favWord,
			desc: description,
			pple: peopleNeeded,			// what you want to save
			date: eventDate,
			startT: startTime,
			endT: endTime,
			where: place,
			contWay: contactMethod,
			contDets: contactDetails 
		};
		console.log(data);
		saveData(data);
	});
});