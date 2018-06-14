const randomize = require('randomatic');

module.exports = function (count) {
	const getDocument = (index) => ({
		id: index,
		name: randomize('a', 8),
		lastname: randomize('a', 12),
		language: randomize('A', 2),
		location: randomize('Aa', 6),
	});
	if (count === 1) {
		return getDocument(count);
	}
	return Array(count)
		.fill()
		.map((el, i) => getDocument(i + 1));
};
