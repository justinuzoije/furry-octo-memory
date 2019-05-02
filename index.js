require('fs').readFile('example.com.har', function (err, data) {
    var har = JSON.parse(data),
        YSLOW = require('yslow-nodejs').YSLOW,
        doc = require('jsdom').jsdom(),
        res = YSLOW.harImporter.run(doc, har, 'ydefault'),
        content = YSLOW.util.getResults(res.context, 'basic');
 
    console.log(content);
});
{ w: 98725, o: 89, u: 'http%3A%2F%2Fexample.com%2F', r: 9, i: 'ydefault', lt: 981 }