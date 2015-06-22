var test = require('tape');
var cuid24 = require('./');

test('cuid should be string', function (t) {
    t.plan(1);
    t.equal(typeof cuid24(), 'string');
});

test('cuid with the length 24', function (t) {
    t.plan(1);
    t.equal(cuid24().length, 24);
});

test('return unique cuid for each invocation', function (t) {
    t.plan(1);
    t.notEqual(cuid24(), cuid24());
});
