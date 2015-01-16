/* main.js file for tabbit */
var chordData = null;

$(document).ready(function() {

	$.get('get-lucky-chords.txt', function(data) {
   		$('#start-button').show();
		chordData = data;
   		//process text file line by line
   	});
});

function start_song(){
	    
    var lines = chordData.split(/\r\n|\n/);
    
    for (var i=0; i<lines.length; i++){    	
    	//clearTimeout(chordTimeout);
    	var chordParsed = lines[i].split(";");
     	var chordTime = chordParsed[2];
     	var chordNotation = chordParsed[1];

     	setTimeout("$(document).on('keypress', function(e){ chord_event(String.fromCharCode(e.which) ,'"  
     		+ chordNotation + "');});", chordTime*1000 - 100);

     	setTimeout("$(document).off('keypress')", chordTime*1000 + 100);
    }
}

$(function()
	{
		console.log('test');
		$('#button-start').on('click', startGame);

		//populate the game
		var i = 0;
		var j = 1;
		for(i = 0; i < 10; i++)
		{
			var oldChord = $('.chord.cord-'+j).last();
			var newChord = oldChord.clone();
			newChord.css({top: (parseInt(oldChord.css('top').split('px')[0]) + 1000 + 'px') });
			$('#chords').append(newChord);

			console.log(oldChord.css('top'), newChord);

			j++;

			if(j > 4)
				j = 1;
		}
});

function startGame(event)
{
	console.log('starting game...');
	$('#chords').addClass('startgame');
	// var songDuration = 10; //in seconds
	// var speed = 1; //pixels per millisecond
	// document.getElementById('chords').style.top = '0px';
	// var interval = window.setInterval(function()
	// {
	// 	document.getElementById('chords').style.top = parseInt(document.getElementById('chords').style.top.split('px')[0]) - 1 + 'px';
	// 	//$('#chords').css({'top': '-=1px'});
	// }, 1);

	// window.setTimeout(function() { window.clearInterval(interval) }, (songDuration * 1000))

}