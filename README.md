# Compare an Array of Strings

Just install and then:

	var compareArrayOfStrings = require('compare-array-of-strings');

Let's have some arrays of strings:

	var one = ["one", "two", "three"],
		sameOne = ["one", "three", "two"],
		actuallyDifferent = ["one", "four", "three"];

Then, for example:

	compareArrayOfStrings(one, sameOne)

Will return `true`

	compareArrayOfStrings(one, actuallyDifferent)

Will return `false`