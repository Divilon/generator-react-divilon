'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-react-divilon:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ 'skip-install': true })
      .withArguments(['divilon-react'])
      .withPrompts({ layout: 'node' })
      .toPromise();
  });

  it('set application name into package.json', function () {
    assert.fileContent('package.json', /"name": "divilon-react"/);
  });

  it('set proper base page title', function () {
    assert.fileContent('src/index.html', /<title>Divilon React<\/title>/);
    assert.fileContent('src/js/application.js', /<h1>Divilon React<\/h1>/);
  });
});
