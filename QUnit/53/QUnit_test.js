
QUnit.test( "hello world", function( assert ) {
  	var result = helloWorld();
	assert.equal(result, "hello world!");
});

QUnit.test( "hello_uppercase", function( assert ) {
  	var result = helloUpperCase("Denver");
         assert.equal("Hello, DENVER", result);
           
});

QUnit.test( "hello_joe", function( assert ) {
  	var result = hello_joe("Bob");
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

QUnit.test( "lenght", function( assert ) {
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
       var result = hello_list(number);
  	assert.equal("Hello world Hello world Hello world Hello world ",result);
   
});


QUnit.test( "high_low", function( assert ) {
  	var result = high_low();
        assert.equal(2, result);
         
});

