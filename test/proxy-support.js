'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('proxy existing server', function () {
  describe('enable proxying of underlying server', function () {
    before(function () {
      // node style source layout
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withOptions({ 'skip-install': true })
        .withPrompts({ proxy: 'http://localhost:8000' })
        .toPromise();
    });

    it('place proxy configuration to webpack config', function () {
      assert.fileContent(
        'webpack.config.js',
        /proxy:\s*\{\s*'\*':\s*'http:\/\/localhost:8000'\s*\}/m
      );
    });
  });

  describe('enable proxying default dev server port', function () {
    before(function () {
      // node style source layout
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withOptions({ 'skip-install': true })
        .withPrompts({ proxy: 'http://localhost:8080' })
        .toPromise();
    });

    it('dev server port is changed to 8081', function () {
      assert.fileContent(
        'webpack.config.js',
        /devServer(.+\s+)+port:\s8081/m
      );
    });
  });

  describe('disable proxy', function () {
    before(function () {
      // node style source layout
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withOptions({ 'skip-install': true })
        .withPrompts({ proxy: 'none' })
        .toPromise();
    });

    it('place proxy configuration to webpack config', function () {
      assert.noFileContent(
        'webpack.config.js',
        /devServer(.+\s+)+proxy:/m
      );
    });
  });
});
