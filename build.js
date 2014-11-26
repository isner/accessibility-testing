
/**
 * Module dependencies.
 */

var path = require('path');
var fs = require('fs');
var UTF8 = 'utf-8';
var targetRE = /<!--TARGET-->/;
var beau = require('./lib/markup_beauty');
var escapeHtml = require('escape-html');

var template = fs.readFileSync('layout.html', UTF8);

var examples = {
  sourcePath: 'examples',
  files: [],
  cat: '',
  output: null,
  outputFile: 'index.html',
};

examples.files = fs.readdir(examples.sourcePath, function (err, files) {
  if (err) throw err;

  files.forEach(function (file) {
    var num = files.indexOf(file) + 1;

    fs.readFile(path.join(examples.sourcePath, file), UTF8, function (err, example) {
      if (err) throw err;

      examples.cat += [
        '<h2>',
        headingFromFile(file),
        '</h2>',
        '<div id="ex' + num + '" class="example" tabindex="0">',
        example,
        '</div>',
        '<pre><code class="html">',
        escapeHtml(beau({ source: example })),
        '</code></pre>',
      ].join('');

      if (num == files.length) {
        examples.output = template.replace(targetRE, examples.cat);
        fs.writeFileSync(examples.outputFile, examples.output);
      }
    });
  });
});

/**
 * Converts the filename of an example into a heading.
 *
 * Ex: 'traditional-labels.js' => 'traditional labels'
 *
 * @param {String} file
 * @return {String}
 * @api private
 */

function headingFromFile(file) {
  var heading = file.replace(/-|_/g, ' ');
  heading = heading.replace('.html', '');
  return heading.substr(0, 1).toUpperCase() + heading.substr(1);
}
