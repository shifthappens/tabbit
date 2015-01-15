/* main.js file for tabbit */
var chordData = null;
var matchTime = false;

var speed = 1000;
var totalHeight = null;00000000000000

$(document).ready(function() {

	$.get('get-lucky-chords.txt', function(data) {
   		$('#start-button').show();
		  chordData  = data;
      start_song();

    //$(document).on('keypress', function(e){

    //  if(matchime){
    //    $(document).bind("keypress", )
    //    match_event(String.fromCharCode(e.which), tabChord);
    //  }
    //  else{
    //    non_match_event();
    //  }
    //});
   		//process text file line by line
    
   	});
});

function start_song(){
	  
    var lines = chordData.split(/\r\n|\n/);
    
    var lastChord = lines[lines.length-1].split(";");
    totalHeight = speed * lastChord[3];
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
  
  var topPosition = totalHeight - speed * chordTime;

  $('#chords').append("<div class='chord' style='top: " + topPosition + "px'>" + 
    chordNotation.substring(0,1) + "</div>");
}