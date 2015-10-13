var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0.00C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.00 Celsius");
    });
    test('48F = 8.89C', function() {
        original.value = "48F";
        calculate();
        assert.deepEqual(converted.innerHTML, "8.89 Celsius");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
    test('35C != 2.00 Farenheit', function() {
        original.value = "35C";
        calculate();
        assert.notEqual(converted.innerHTML, "2.00 Farenheit");
    });
    test('5C !== 21.00 Farenheit', function() {
        original.value = "35C";
        calculate();
        assert.notStrictEqual(converted.innerHTML, "2.00 Farenheit");
    });
    test('110F > 30.00C', function() {
        original.value = "110.00F";
        calculate();
        assert.isAbove(converted.innerHTML, "30.00C");
    });
});