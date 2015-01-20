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

  $('#button-start').on('click', startGame);

  scwidget = SC.Widget(document.getElementById('musicplayer-iframe'));
   scwidget.bind(SC.Widget.Events.READY, function(e) 
   	{ 
   		scwidget.bind(SC.Widget.Events.PLAY, function(e) { 
   			console.log('music starts playing!');
   			$('#chords').addClass('startgame'); //this starts the scrolling animation by adding the class to the chords div
   		})
   	})
});

function onPlayerReady(event) {
  $("#button-start").show();
} 

function start_song(){
	  
    var lines = chordData.split(/\r\n|\n/);
    
    var lastChord = lines[lines.length-1].split(";");
    
    for (var i=0; i<lines.length; i++){    	
    	
    	var chordParsed = lines[i].split(";");
     	var chordTime = chordParsed[2];
     	var chordNotation = chordParsed[1];

      //if(chordParsed[0] == '1'){
        draw_chord(chordTime, chordNotation, i);
      //}
    }
}

function draw_chord(chordTime, chordNotation, index){
  
  var topPosition =(speed * chordTime) + 90;

  $('#chords').append("<div class='chord' id='chord_" + index + "' data-timing='"+chordTime+"' data-key='"+chordNotation+"' style='top: " + topPosition + "px'>" + 
    chordNotation.substring(0,1) + "</div>");
}

function startGame(event)
{
  console.log('starting game...');  
  setupTimersForGame();
  scwidget.play();
}

function updateScore(points)
{
	baseScore = "0000";
	currScore = parseInt($('#score').text());
	newScore = currScore + points;
	newScore = newScore.toString();
	numOfZeroes = 4 - newScore.length;
	numOfZeroes.toString();
	console.log(currScore, newScore, numOfZeroes);
	$('#score').text(baseScore.substr(0, numOfZeroes) + newScore);
}