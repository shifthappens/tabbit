function setupTimersForGame()
{
  var totalNumChords = $('.chord').nextAll().length;

  $('.chord').each(function(i, chord)
  {
  	timertime = ($(chord).data('timing')*1000) - 200 + 500;
  	key = $(chord).data('key');

  	console.log(key, timertime);
	  setTimeout("$(document).on('keypress', function(e){ match_event('" + $(chord).attr('id') + "', String.fromCharCode(e.which) ,'"  
	 	  + key + "');}); console.log('timer for "+key+" begins after "+timertime+" ms');", timertime);

	  setTimeout("$(document).off('keypress')", ($(chord).data('timing')*1000) + 200 + 500);

	  if(!--totalNumChords)
	  	$(document).trigger('timersready');

  });


}
function match_event(elemId, userChord, tabChord){
	
	console.log('Lets see if the user pressed the right key: '+userChord, tabChord);
	if(userChord.toLowerCase() == tabChord.substring(0,1).toLowerCase()){
		$("#" + elemId).addClass('exploded');
		console.log("CHORD " + userChord + " MATCH!")
		updateScore(50);
	}
	else{
		console.log("CHORDS " + userChord + " AND " + tabChord + " DON'T MATCH!")
		updateScore(-50);
	}
}

function  non_match_event(){

}