/* main.js file for tabbit */
var chordData = null;
var matchTime = false;

var speed = 100;
var totalHeight = null;

var player;

$(document).ready(function() {

	$.get('get-lucky-chords.txt', function(data) {
   		$('#start-button').show();
		  chordData  = data;
      start_song();
   	});

});

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '250',
    width: '500',
    videoId: 'bBJ9RnbK8G4',
  });
}

function start_song(){
	  
    var lines = chordData.split(/\r\n|\n/);
    
    var lastChord = lines[lines.length-1].split(";");
    //totalHeight = speed * lastChord[3 ];
    //$('.cord').height(totalHeight);

    for (var i=0; i<lines.length; i++){    	
    	//clearTimeout(chordTimeout);
    	var chordParsed = lines[i].split(";");
     	var chordTime = chordParsed[2];
     	var chordNotation = chordParsed[1];

      //setTimeout(function(){matchTime = true;}, chordTime*1000 -100);
      //setTimeout(function(){matchTime = false;}, chordTime*1000 + 100);
      draw_chord(chordTime, chordNotation);
      
      setTimeout("$(document).on('keypress', function(e){ match_event(String.fromCharCode(e.which) ,'"  
     	  + chordNotation + "');});", chordTime*1000 - 100);

     	setTimeout("$(document).off('keypress')", chordTime*1000 + 100);
    }
}

function draw_chord(chordTime, chordNotation){
  
  var topPosition = speed * chordTime + 55;

  $('#chords').append("<div class='chord' style='top: " + topPosition + "px'>" + 
    chordNotation.substring(0,1) + "</div>");
}

function startGame(event)
{
	console.log('starting game...');
	$('#chords').addClass('startgame');

  player.playVideo();
}