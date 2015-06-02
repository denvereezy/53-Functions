
QUnit.test( "hello world", function( assert ) {
  	var result = helloWorld();
	assert.equal(result, "hello world!");
});

QUnit.test( "hello_uppercase", function( assert ) {
  	var result = helloUpperCase("Denver");
         assert.equal("Hello, DENVER", result);
           
});

QUnit.test( "hello_joe", function( assert ) {
  	var result = hello_joe("Joe");
	assert.equal("Hello", result);
        
});

QUnit.test( "number list", function( assert ) {
       var result = number_list(10);
  	assert.equal([1,2,3,4,5,6,7,8,9,10].toString(), result.toString());
   
});


QUnit.test( "sum numbers", function( assert ) {
  	var result = sum_numbers(15);
        assert.equal(120, result);
         
});

QUnit.test( "length", function( assert ) {
  	var result = myFunction(string);
	assert.equal(result, 7);
});

QUnit.test( "upper", function( assert ) {
  	var result = upper(string);
         assert.equal("DENVER!", result);
           
});

QUnit.test( "reverse", function( assert ) {
  	var result = reverse(string);
	assert.equal("!revned", result);
        
});

QUnit.test( "hello_list", function( assert ) {
       var result = hello_list(4);
  	assert.equal(result,"Hello world Hello world Hello world Hello world ");
   
});


QUnit.test( "high_low (high)", function( assert ) {
  	var result = high();
        assert.equal(1, result);
         
});
QUnit.test( "high_low (low)", function( assert ) {
  	var result = low();
        assert.equal(100, result);
         
});
QUnit.test( "count_words", function( assert ) {
        var sentence = ("I am Denver Daniels and im awesome");
  	var result = count_words(sentence);
        assert.equal(7, result);
         
});

QUnit.test( "sum_word_len", function( assert ) {
        var sentence = ("I am Denver Daniels and im awesome");
  	var result = sum_word_len(sentence);
        assert.equal(28, result);
         
});

QUnit.test( "longest_word", function( assert ) {
        var sentence = ("I am Denver and thats it assholes");
  	var result = longest_word(sentence);
        assert.equal("assholes 8", result);
         
});

QUnit.test( "shortest_word", function( assert ) {
        var sentence = ("I am Denver and thats it assholes");
  	var result = shortest_word(sentence);
        assert.equal("I 1", result);
         
});

QUnit.test( "word_length", function( assert ) {
        var sentence = ("This is a long sentence with multiple word lengths");
  	var result = word_length(sentence);
        assert.equal("{\"val1\":4,\"val2\":5}" , result);
               
});

QUnit.test( "avg", function( assert ) {
        var sentence = ("This is a long sentence with multiple word lengths");
        var result = avg(sentence);
        assert.equal("5", result);
         
});

QUnit.test( "start", function( assert ) {
        var sentence = ("I am Denver Daniels and im awesome");
  	var result = start(sentence);
        assert.equal("a", result);
         
});




/*
QUnit.test( "occurs_most", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "occurs_least", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});
*/
QUnit.test( "uppercase_letters", function( assert ) {
  	var str = ("The CampIoN Is NoT Here!");
        var result = uppercase_letters(str);
        assert.equal(["T", "C", "I", "N", "I", "N", "T", "H"].toString(), result);
         
});

QUnit.test( "lowercase_letters", function( assert ) {
  	var str = ("The CampIoN Is NoT Here!");
        var result = lowercase_letters(str);
        assert.equal(["h", "e", "a", "m", "p", "o", "s", "o", "e", "r", "e"].toString(), result);
         
});
/*
QUnit.test( "square_stars", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "square", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
        
});

QUnit.test( "square_param", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "tri", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "tri_char", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "square_param_base", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "diamond", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "diamond_star", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "diamond_char_base", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "add", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "divide", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "calc_all", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "calc_chain", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "paper_rock", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "factors2", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "factors_2_or_7", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "factors_2_and_7", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "factorial", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "fibonacci", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "ascii_upper", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "ascii_params", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "mondays", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "anyday", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "dice_rolls", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "lower_ascii_sum", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "cricket", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});

QUnit.test( "filter", function( assert ) {
  	var result = count_wrds(sentence);
        assert.equal("", result);
         
});
*/


