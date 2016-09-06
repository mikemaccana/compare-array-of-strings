// Tests. Mocha TDD/assert style. See
// http://visionmedia.github.com/mocha/
// http://nodejs.org/docs/latest/api/assert.html

var assert = require("assert"),
	compareArrayOfStrings = require('../index.js')

var log = console.log.bind(console)

var one = ["one", "two", "three"],
	sameOne = ["one", "three", "two"],
	actuallyDifferent = ["one", "four", "three"];

suite('Correctly compares arrays of strings', function(){
	test("true when they're the same but in a different order", function(){
		assert(compareArrayOfStrings(one, sameOne))
	});

	test("false when they're genuinely different", function(){
		assert.equal(false, compareArrayOfStrings(one, actuallyDifferent))
	});
})
