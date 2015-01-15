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