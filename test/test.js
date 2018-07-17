const test = require('tape');

//router.js pure functions test
const { getPath , getType } = require('../src/router');
test('Testing router.js\n', function (t) {
    t.equal(getPath('/main.css'), './public/main.css', 'pathing function test');
    t.equal(getType('/main.css'), 'text/css', 'mime type function test')
    t.end();
});