function chord_event(userChord, tabChord){
	
	if(userChord.toLowerCase() == tabChord.substring(0,1).toLowerCase()){
		alert("CHORD " + userChord + " MATCH!")
	}
	else{
		alert("CHORDS " + userChord + " AND " + tabChord + " DON'T MATCH!")
	}
}