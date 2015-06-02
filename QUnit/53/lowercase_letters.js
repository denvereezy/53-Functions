function lowercase_letters(str){
var list = [];
for(var i = 0, len = str.length, count=0, words; i < len; i++)
{
	words = str.charAt(i);
	if(words >= 'a' && words <= 'z'){ 
      count++;
     list.push(words);
 }
  
}
  return list;
}

