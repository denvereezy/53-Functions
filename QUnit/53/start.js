function start(sentence){
    var wordCollection=sentence.split(" ");
    var StartWith={};

 for(i=0;i<wordCollection.length;i++){
 var letter=wordCollection[i][0].toLowerCase();
  if(!StartWith[letter]){
   StartWith[letter]=[];
     StartWith[letter].push(wordCollection[i]);
  }

}
console.log(letter);
return letter;
}
