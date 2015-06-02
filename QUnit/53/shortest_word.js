
function shortest_word(sentence){
  var mine = sentence.split(" ");
  var shortestWord = mine[mine.length-1];
  
  	for(i =0; i < mine.length; i++){
      if(shortestWord.length > mine[i].length){
      shortestWord =mine[i];
        }
    }
  
  return shortestWord + " " +shortestWord.length;
}
 
