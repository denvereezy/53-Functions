var avg = function(sentence) {

    var words = sentence.split(' ');    
    var lengths = [];
      
   
    for(var i=0,j=words.length;i<j;i++){
        lengths.push(words[i].length);
    }
    var x = lengths.join('').length;
    var y = sentence.split(' ').join('').length;
    var z = y/x;
    lengths.sort();
  
   return Math.ceil(z);
  
};

