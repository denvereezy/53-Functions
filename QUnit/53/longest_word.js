
function longest_word(sentence){
  var longestWord= "";
  var mine = sentence.split(" ");
  
  	for(i =0; i < mine.length; i++){
    		if(longestWord.length < mine[i].length){
      			longestWord = mine[i];
          	}
        }
  
  return longestWord + " " +longestWord.length;
}

