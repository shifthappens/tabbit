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

   soundcloud.addEventListener('onPlayerReady', function(scPlayer, data) {
      //scPlayer.api_play();
      $('#button-start').show();
   });
  //SC.oEmbed("https://soundcloud.com/user723751824/get-lucky-daft-punk-feat", {color: "ff0066"},  document.getElementById("putTheWidgetHere"));
  //console.log(player);

});

//function onYouTubeIframeAPIReady() {
//  player = new YT.Player('player', {
//    height: '250',
//    width: '500',
//    videoId: 'bBJ9RnbK8G4',
//    events: {
//      'onReady': onPlayerReady
//    }
//  });
//}

function onPlayerReady(event) {
  $("#button-start").show();
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
      
      //if(chordParsed[0] == '1'){
        draw_chord(chordTime, chordNotation, i);
      //}
      //setTimeout("$(document).on('keypress', function(e){ match_event(String.fromCharCode(e.which) ,'"  
     	//  + chordNotation + "');});", chordTime*1000 - 100);

     	//setTimeout("$(document).off('keypress')", chordTime*1000 + 100);
    }
}

function draw_chord(chordTime, chordNotation, index){
  
  var topPosition =(speed * chordTime) + 55;

  $('#chords').append("<div class='chord' id='chord_" + index + "' data-timing='"+chordTime+"' data-key='"+chordNotation+"' style='top: " + topPosition + "px'>" + 
    chordNotation.substring(0,1) + "</div>");
}

function startGame(event)
{
  //player.playVideo();am
  //player.play();r(
  //widget.play();
  setupTimersForGame();
  var player = soundcloud.getPlayer('sc-player');
  player.api_play();
  
	console.log('starting game...');
  //setTimeout("$('#chords').addClass('startgame')", 1000);
	$('#chords').addClass('startgame');
  
}