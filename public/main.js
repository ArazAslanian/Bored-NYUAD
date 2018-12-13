var today = new Date();
console.log(today);
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
var hours = today.getHours();
var minutes = today.getMinutes();




if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

if(hours<10) {
	hours = '0'+hours
}

if(minutes<10) {
	minutes = '0'+minutes
}

today = yyyy + "-" +  mm + "-" + dd;
today = today.replace("-", "");
today = today.replace("-", "");
happenNow = today;
today = today + hours;
today = today + minutes;
today = parseInt(today)











$('#blakh').hide('fast', function() {

});

$('#graphic').hide('fast', function() {

});

$('#oldList').hide('fast', function() {

});



$('#ideasDiv').hide('fast', function() {

});

$('#home').hide('fast', function() {

});

$('#gridCont').hide('fast', function() {

});


$( "#createButton" ).click(function() {

	$("#create").fadeOut(2000)
	$("#graphic").fadeOut(2000)
	$("#oldList").fadeOut(2000)
	$("#mainList").fadeOut('slow', function() {
	});
	setTimeout(function(){$("#blakh").fadeIn('slow', function() {
	})
	}, 1000);
	
});



$( "#join" ).click(function() {

	$("#gridCont").fadeOut('slow', function() {
	});
	setTimeout(function(){$("#mainList").fadeIn('slow', function() {
	})
	$("#home").fadeIn(2000)}, 1000);
});



var coll = document.getElementsByClassName("collapsible");
var i;



function dashRemover(a) {
	var a =(a.date+a.endT).replace("-", "");
	a = a.replace("-","");
	a = a.replace(":", "");
	a = parseInt(a);

	return a;
}


function buttonClick() {
	console.log("zabat")
}


function makeHTML(theData){

	random = 0;
	charity = 0;
	cooking = 0;
	education = 0;
	music = 0;
	recreational = 0;
	relaxation = 0;
	social = 0;




	projectedList = [];
	pastEvents = [];
	theData.sort(function(a, b){
		var a = dashRemover(a);
		var b = dashRemover(b);
		return a-b
	})
	for (i = 0; i < theData.length; i++) {
		var j = dashRemover(theData[i]);
		console.log(j);
		if (j > today) {
			projectedList.push(theData[i])
		} else {
			pastEvents.push(theData[i])
		}

	}



	// var l = 1;
	// pastEvents.forEach(function(dd){				//loop
	// 	thisContentOld = "thisContent" + l.toString();
	// 	thisButtonOld = "thisButton" + l.toString();
	// 	var addOnOld = $('<button id = "lala' + l.toString() + '"><b>'+ dd.word + '</b><br><i>Hosted by: ' + dd.user + '</i>' + '</button>');
	// 	var addOnOld = $('<button><table><tr><td class="cellWidth">' + dd.word + '</td><td>' + dd.date + '</td></tr><tr><td>' + dd.user + '</td><td>' + dd.startT + ' - ' + dd.endT + '</td></tr></table>')
	// 	$('#oldList').append(addOnOld);
	// 	addOnOld.addClass('collapsible');
	// 	var addOnInOld = $('<div></div>')
	// 	$('#oldList').append(addOnInOld);
	// 	addOnInOld.addClass('content');
	// 	addOnInOld.addClass(thisContentOld);
	// 	$("."+thisContentOld).append('<table><tr><td>Event Description:</td><td>' + dd.desc + '</td></tr><tr><td>People needed:</td><td>' + dd.pple  + '</td></tr><td>Place:</td><td>' + dd.where + '</td></tr><tr><td>Contact Info:</td><td>' + dd.contWay + ' - ' + dd.contDets + '</td></tr></table>');

	// 	l++;

	// });
	

	 // for (i = 0; i < theData.length; i++) {


		// if (i.date < today) {
		// 	console.log("hi")
		// }
	 // }

	// console.table(theData);

	var c = 1;
	projectedList.forEach(function(d){				//loop

		if (d.categ == 'random') {
			console.log("hi")
			random++;
			console.log(random);
		} else if (d.categ == 'charity') {
			charity++;
		} else if (d.categ == 'cooking') {
			cooking++;
		} else if (d.categ == 'education') {
			education++;
		} else if (d.categ == 'music') {
			music++;
		} else if (d.categ == 'recreational') {
			recreational++;
		} else if (d.categ == 'social') {
			social++;
		}


		// console.log(d);
		var theDate = d.date.replace("-", "");
		theDate = theDate.replace("-", "");

		if (theDate == happenNow) {
			var m = "HAPPENING TODAY - "
		} else {
			var m = "";
		}
		thisContent = "thisContent" + c.toString();
		thisButton = "thisButton" + c.toString();

		// var addOn = $('<button id = "lala' + c.toString() + '"><b>' + d.word + '</b><br><i>Hosted by: ' + d.user + '</i>' + '</button>');
		var addOn = $('<button><table><tr><td class="cellWidth"><b>' + m +  d.word + '</b></td><td>' + d.date + '</td></tr><tr><td><i>Host: ' + d.user + '</i></td><td>' + d.startT + ' - ' + d.endT + '</td></tr></table>')
		$('#mainList').append(addOn);
		addOn.addClass('collapsible');
		var addOnIn = $('<div></div>')
		$('#mainList').append(addOnIn);
		addOnIn.addClass('content');
		addOnIn.addClass(thisContent);
		$("."+thisContent).append('<table><tr><td>Event Description:</td><td>' + d.desc + '</td></tr><tr><td>People needed:</td><td>' + d.pple  + '</td></tr><td>Place:</td><td>' + d.where + '</td></tr><tr><td>Contact Info:</td><td>' + d.contWay + ' - ' + d.contDets + '</td></tr></table>');
		

		var buttonFull = $("<button id = 'nope" + c.toString() + "'>" +"Event Full</button>");
		$('.'+thisContent).append(buttonFull);
		buttonFull.addClass('yesRad');
		buttonFull.addClass("thisButton");
		buttonFull.addClass("eventFull");

		
		$("#nope" + c.toString()).click(function(){
			// console.log("lele")
		});

		c++;

	});

	var j = 1;
	pastEvents.forEach(function(k){				//loop
		// console.log(d);
		// if (d.date == happ) {
		// 	var m = "HAPPENING TODAY - "
		// } else {
		// 	var m = "";
		// }
		thisContentOld = "thisContentOld" + j.toString();
		thisButtonOld = "thisButtonOld" + j.toString();

		var addOnOld = $('<button id = "lala' + j.toString() + '"><b>'+ k.word + '</b><br><i>Hosted by: ' + k.user + '</i>' + '</button>');
		var addOnOld = $('<button><table><tr><td class="cellWidth"><b>'  +  k.word + '</b></td><td>' + k.date + '</td></tr><tr><td><i>Host: ' + k.user + '</i></td><td>' + k.startT + ' - ' + k.endT + '</td></tr></table>')
		$('#oldList').append(addOnOld);
		addOnOld.addClass('collapsible');
		var addOnInOld = $('<div></div>')
		$('#oldList').append(addOnInOld);
		addOnInOld.addClass('contentOld');
		addOnInOld.addClass(thisContentOld);
		$("."+thisContentOld).append('<table><tr><td>Event Description:</td><td>' + k.desc + '</td></tr><tr><td>People needed:</td><td>' + k.pple  + '</td></tr><td>Place:</td><td>' + k.where + '</td></tr><tr><td>Contact Info:</td><td>' + k.contWay + ' - ' + k.contDets + '</td></tr></table>');
		

		// var buttonFull = $("<button id = 'nope" + c.toString() + "'>" +"Event Full</button>");
		// $('.'+thisContent).append(buttonFull);
		// buttonFull.addClass('yesRad');
		// buttonFull.addClass("thisButton");
		// buttonFull.addClass("eventFull");

		
			

		j++;

	});
	//return addOn;
	//console.log(addOn);




	//return addOn;
	//console.log(addOn);
	


	// var coll = document.getElementsByClassName("collapsible");
 //    var k;
	// for (k = 0; i < coll.length; k++) {
	//   coll[k].addEventListener("click", function() {
	//     this.classList.toggle("active");
	//     var content = this.nextElementSibling;
	//     if (content.style.display === "block") {
	//       content.style.display = "none";
	//     } else {
	//       content.style.display = "block";
	//     }
	//   });
	// }


	var coll = document.getElementsByClassName("collapsible");
    var i;
	for (i = 0; i < coll.length; i++) {
	  coll[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    var content = this.nextElementSibling;
	    if (content.style.display === "block") {
	      content.style.display = "none";
	    } else {
	      content.style.display = "block";
	    }
	  });
	}
	makeGraph();

}
	// document.getElementsByClassName("eventFull").addEventListener("click", buttonClick);

	// var full = document.getElementsByClassName('eventFull');
 // 	full.addEventListener("click", function() {
 // 		console.log('yalla')
 //    });

		// return random;
		// return charity;
		// return cooking;
		// return education;
		// return music;
		// return social;







// console.log(social);
// console.log(charity);



// function getWord(term){
// 	$.ajax({
// 		url: '/api/word/' + term,
// 		type: 'GET',
// 		dataType: 'json',
// 		error: function(data){
// 			console.log(data);
// 			alert("Oh No! Try a refresh?");
// 		},
// 		success: function(data){
// 			console.log("WooHoo!");
// 			console.log(data);

// 			var theData = data.map(function(d){
// 				return d.doc;
// 			});
// 			var str = '';
// 			if (theData.length === 1){
// 				str = " time";
// 			}
// 			else{
// 				str = " times";
// 			}
// 			$('body').append('<h2>This word has been favorited ' + theData.length + str + '!</h2>');
// 			var htmlString = makeHTML(theData);
// 			$('body').append(htmlString);
// 		}
// 	});
// }

//step 1 get
//getting all data to show on the page every time the page loads
function getAllData(){
	console.log("hi?")
	$.ajax({
		url: '/api/all',		//directs you to the app.js all data json file
		type: 'GET',
		dataType: 'json',
		error: function(data){
			// console.log(data);
			alert("Oh No! Try a refresh?");
		},
		success: function(data){
			console.log("We have data");
			// console.log(data);
			//Clean up the data on the client
			//You could do this on the server
			var theData = data.map(function(d){				//looping through the data, and giving you cleaner data
				return d.doc;
			});
			makeHTML(theData);

			

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
			// var addOn = $('<button><table><tr><td>' + d.word + '</td><td>' + d.date + '</td></tr><tr><td>' + d.user + '</td><td>' + d.startT + ' - ' + d.endT + '</td></tr></table>')
			// $('#mainList').append(addOn);
			// addOn.addClass('collapsible');
			// var addOnIn = $('<div></div>')
			// $('#mainList').append(addOnIn);
			// addOnIn.addClass('content');
			// addOnIn.addClass('current');
			// $(".current").append('<table><tr><td>Event Description:</td><td>' + d.desc + '</td></tr><tr><td>People needed:</td><td>' + d.pple  + '</td></tr><td>Place:</td><td>' + d.where + '</td></tr><tr><td>Contact Info:</td><td>' + d.contWay + ' - ' + d.contDets + '</td></tr></table>');

			// var addOn = $('<button><table><tr><td>' + obj.word + '</td><td>' + obj.date + '</td></tr><tr><td>' + obj.user + '</td><td>' + obj.startT + ' - ' + obj.endT + '</td></tr></table>')
			// $('#mainList').append(addOn);
			// addOn.addClass('collapsible');
			// var addOnIn = $('<div></div>')
			// $('#mainList').append(addOnIn);
			// addOnIn.addClass('content');
			// addOnIn.addClass('current');
			// $(".current").append('<table><tr><td>Event Description:</td><td>' + obj.desc + '</td></tr><tr><td>People needed:</td><td>' + obj.pple  + '</td></tr><td>Place:</td><td>' + obj.where + '</td></tr><tr><td>Contact Info:</td><td>' + obj.contWay + ' - ' + obj.contDets + '</td></tr></table>');

		


			var theDate = obj.date.replace("-", "");
			theDate = theDate.replace("-", "");

			if (theDate == happenNow) {
				var m = "HAPPENING TODAY - "
			} else {
				var m = "";
			}
			var addOn = $('<button><table><tr><td class="cellWidth"><b>' + m +  obj.word + '</b></td><td>' + obj.date + '</td></tr><tr><td><i>Host: ' + obj.user + '</i></td><td>' + obj.startT + ' - ' + obj.endT + '</td></tr></table>')
			$('#mainList').append(addOn);
			addOn.addClass('collapsible');
			var addOnIn = $('<div></div>')
			$('#mainList').append(addOnIn);
			addOnIn.addClass('content');
			addOnIn.addClass('current');
			$(".current").append('<table><tr><td>Event Description:</td><td>' + obj.desc + '</td></tr><tr><td>People needed:</td><td>' + obj.pple  + '</td></tr><td>Place:</td><td>' + obj.where + '</td></tr><tr><td>Contact Info:</td><td>' + obj.contWay + ' - ' + obj.contDets + '</td></tr></table>');
			
			var buttonFull = $("<button id = 'nope'>" +"Event Full</button>");
			$('.current').append(buttonFull);
			buttonFull.addClass('yesRad');
			buttonFull.addClass("thisButton");
			buttonFull.addClass("eventFull");








	

	// 		var coll = document.getElementsByClassName("collapsible");
	// 	    var i;
	// 		for (i = 0; i < coll.length; i++) {
	// 		  coll[i].addEventListener("click", function() {
	// 		    this.classList.toggle("active");
	// 		    var content = this.nextElementSibling;
	// 		    if (content.style.display === "block") {
	// 		      content.style.display = "none";
	// 		    } else {
	// 		      content.style.display = "block";
	// 		    }
	// 		  });
	// }





			// var htmlString = '<li>' + obj.user + ' : ' + obj.word + '</li>';
			// $('ol').append(htmlString);
		}
	});
}

$(document).ready(function(){

		getAllData();


	});

//first step: client entering the data
	$('#enterButton').click(function(){
		var userName = $("#userName").val() || 'ME';
		var category = $("#eventType").val() || 'random';
		var favWord = $("#favWord").val() || 'test';
		var description = $("#description").val() || 'event';
		var peopleNeeded = $("#peopleNum").val() || "0";
		var eventDate = $("#date").val();
		var startTime = $("#from").val();
		var endTime = $("#to").val();
		var place = $("#place").val();
		var contactMethod = $("#conMethod").val();
		var contactDetails = $("#conNum").val();



		var timeStamp = new Date();
		//Create data object to be saved
		var data = {
			user: userName,
			categ: category,   		// this is the decision you want to make for your final project
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
		saveData(data);
		$("#blakh").fadeOut('slow', function() {
	    });
	    setTimeout(function(){
	    	// location.reload(true);
	    	$("#mainList").fadeIn(2000)
	    	$("#create").fadeIn(2000)

	    }, 1000);


	});



//Getting info from bored API
function getQuestions(){

	console.log("About to get suggestion");
	requestType = $("#eventType").val();

	// partList = [];
	// for (i = 0; i < 10; i++) {
	// 	partList.push(i);
	// }

	// console.log(partList);

	// var rand = partList[Math.floor(Math.random() * partList.length)];

	if (requestType == "random") {
		requestType = '/'
	} else {
		requestType = '?type=' + requestType
	}


	//make ajax request
	$.ajax({
		url: "https://www.boredapi.com/api/activity" + requestType,
		type: 'GET',
		dataType: 'json',
		error: function(err){
			console.log(err);
		},
		success: function(data){
			console.log("WooHoo 2!");
			// theQuestion = data.results[0].question;
			// document.getElementById("d").innerHTML = theQuestion;
			document.getElementById("favWord").value = data.activity;
			console.log(document.getElementById("eventType").value = data.type);

			
			// correctAnswer = data.results[0].correct_answer;
			//console.log(correctAnswer)
			// x = findLongestWord(theQuestion);
			// getGIF();

			
		}
		
	});
	
}

$( "#ideaPos" ).click(function() {
	$("#blakh").fadeOut('slow', function() {
	});

	$('#useIdea').hide('fast', function() {

	});
	setTimeout(function(){$("#ideasDiv").fadeIn('slow', function() {
	})}, 1000);


});

$( "#useIdea" ).click(function() {
	
	
	$("#ideasDiv").fadeOut('slow', function() {
	});

	setTimeout(function(){$("#blakh").fadeIn('slow', function() {
	})}, 1000);


});







$( "#ideaNeed" ).click(function() {
	getQuestions();
	document.getElementById("ideaNeed").innerHTML = 'Try again';

	
	// 	setTimeout(function(){$("#mainList").fadeIn('slow', function() {
	// })}, 1000);

});


$( "#logo" ).click(function() {

    $('#blakh').fadeOut(1000);
    $('#ideasDiv').fadeOut(1000);
    setTimeout(function(){
      
    $("#mainList").fadeIn(2000)
	$("#create").fadeIn(2000)}, 1000);
	location.reload(true);

  
  

		
});



$( "#stats" ).click(function() {

    $('#blakh').fadeOut(1000);
    $('#mainList').fadeOut(1000);
    setTimeout(function(){
    $('#graphic').fadeIn(2000)  
    $('#oldList').fadeIn(2000)
    $('#create').fadeIn(2000)

}, 1000);
	
  
  

		
});


$( "#eventFull" ).click(function() {

	console.log("hi");


});





function makeGraph() {
var data = [{
                "name": "Random",
                "value": random,
        },
            {
                "name": "Charity",
                "value": charity,
        },
            {
                "name": "Cooking",
                "value": cooking,
        },
            {
                "name": "Education",
                "value": education,
        },
            {
                "name": "Music",
                "value": music,
        },
            {
                "name": "Recreational",
                "value": recreational,
        },
            {
                "name": "Relaxation",
                "value": relaxation,
        },
        	{
        		"name": "Social",
        		"value": social,
        	}];

        //sort bars based on value
        data = data.sort(function (a, b) {
            return d3.ascending(a.value, b.value);
        })

        //set up svg using margin conventions - we'll need plenty of room on the left for labels
        var margin = {
            top: 15,
            right: 25,
            bottom: 15,
            left: 500,
        };

        var width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var svg = d3.select("#graphic").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scale.linear()
            .range([0, width])
            .domain([0, d3.max(data, function (d) {
                return d.value;
            })]);

        var y = d3.scale.ordinal()
            .rangeRoundBands([height, 0], .1)
            .domain(data.map(function (d) {
                return d.name;
            }));

        //make y axis to show bar names
        var yAxis = d3.svg.axis()
            .scale(y)
            //no tick marks
            .tickSize(0)
            .orient("left");

        var gy = svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)

        var bars = svg.selectAll(".bar")
            .data(data)
            .enter()
            .append("g")

        //append rects
        bars.append("rect")
            .attr("class", "bar")
            .attr("y", function (d) {
                return y(d.name);
            })
            .attr("height", y.rangeBand())
            .attr("x", 0)
            .attr("width", function (d) {
                return x(d.value);
            });

        //add a value label to the right of each bar
        bars.append("text")
            .attr("class", "label")
            //y position of the label is halfway down the bar
            .attr("y", function (d) {
                return y(d.name) + y.rangeBand() / 2 + 4;
            })
            //x position is 3 pixels to the right of the bar
            .attr("x", function (d) {
                return x(d.value) + 3;
            })
            .text(function (d) {
                return d.value;
            });

}

