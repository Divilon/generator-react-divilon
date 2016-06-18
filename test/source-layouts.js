'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('source layout types', function () {
  describe('node layout', function () {
    before(function () {
      // node style source layout
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withOptions({ 'skip-install': true })
        .withArguments(['divilon-react'])
        .withPrompts({ layout: 'node' })
        .toPromise();
    });

    it('place source files under src directory', function () {
      assert.file(['src/js/application.js', 'src/index.html']);
    });

    it('set webpack source directory to src', function () {
      assert.fileContent(
        'webpack.config.js',
        /sourceDir*.+=*.+'src'/
      );
    });
    it('set webpack dest directory to build', function () {
      assert.fileContent(
        'webpack.config.js',
        /destDir*.+=*.+'build'/
      );
    });
  });

  describe('maven layout', function () {
    before(function () {
      // node style source layout
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withOptions({ 'skip-install': true })
        .withArguments(['divilon-react'])
        .withPrompts({ layout: 'maven' })
        .toPromise();
    });

    it('place source files under src/main/webapp directory', function () {
      assert.file(['src/main/webapp/js/application.js', 'src/main/webapp/index.html']);
    });

    it('set webpack source directory to src/main/webapp', function () {
      assert.fileContent(
        'webpack.config.js',
        /sourceDir*.+=*.+'src\/main\/webapp'/
      );
    });
    it('set webpack dest directory to target/www', function () {
      assert.fileContent(
        'webpack.config.js',
        /destDir*.+=*.+'target\/www'/
      );
    });
  });

  describe('gradle layout', function () {
    before(function () {
      // node style source layout
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withOptions({ 'skip-install': true })
        .withArguments(['divilon-react'])
        .withPrompts({ layout: 'gradle' })
        .toPromise();
    });

    it('place source files under src/main/webapp directory', function () {
      assert.file(['src/main/webapp/js/application.js', 'src/main/webapp/index.html']);
    });

    it('set webpack source directory to src/main/webapp', function () {
      assert.fileContent(
        'webpack.config.js',
        /sourceDir*.+=*.+'src\/main\/webapp'/
      );
    });
    it('set webpack dest directory to build/www', function () {
      assert.fileContent(
        'webpack.config.js',
        /destDir*.+=*.+'build\/www'/
      );
    });
  });
});
