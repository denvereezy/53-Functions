var word_length = function(sentence) {

    var words = sentence.split(' ');    
    var lengths = [];
      
   
    for(var i=0,j=words.length;i<j;i++){
        lengths.push(words[i].length);
    }
    var x = lengths.join('').length;
    var y = sentence.split(' ').join('').length;
    var z = y/x;
    lengths.sort();
  
    

   var result = {};
   result.val1 = Math.floor(z);
   result.val2 = Math.ceil(z);
   
   return JSON.stringify(result);
//return Math.floor(z);
  //return Math.ceil(z);
};

