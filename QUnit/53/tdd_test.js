QUnit.test("testing hello world function", function(assert){
    var result = helloWorld();
    assert.equals("hello world!", result);
});
QUnit.test("testing hello uppercase", function(assert){
    var result = helloUpperCase("Denver");
    assert.equals("Hello, DENVER", result);
});
QUnit.test("testing hello joe", function(assert){
    var result = hello_joe("Bob");
    assert.equals("Hello", result);
});
QUnit.test("testing number list", function(assert){
    var result = number_list(10);
    assert.equals([1,2,3,4,5,6,7,8,9,10].toString(), result.toString());
});
QUnit.test("testing sum numbers", function(assert){
    var result = sum_numbers(15);
    assert.equals(120, result);
});

