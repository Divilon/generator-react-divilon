'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.Base.extend({

  constructor: function () {
    yeoman.Base.apply(this, arguments);

    this.argument('appname', {
      desc: 'Application name',
      type: String,
      required: false,
      defaults: this.determineAppname()
    });
  },

  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the good ' + chalk.red('generator-react-divilon') + ' generator!'
    ));

    var prompts = [];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: {
    configuration: function () {
      this.fs.copy(
        this.templatePath('config.js'),
        this.destinationPath('config.js')
      );
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath('package.json'),
        { applicationName: _.kebabCase(this.appname) }
      );
      this.fs.copy(
        this.templatePath('webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );
    },
    application: function () {
      this.fs.copyTpl(
        this.templatePath('src/index.html'),
        this.destinationPath('src/index.html'),
        { title: _.startCase(this.appname) }
      );
      this.fs.copyTpl(
        this.templatePath('src/js/application.js'),
        this.destinationPath('src/js/application.js'),
        { title: _.startCase(this.appname) }
      );
    }
  },

  install: function () {
    this.npmInstall([
      'webpack', 'webpack-dev-server', 'html-webpack-plugin',
      'babel-loader', 'babel-preset-es2015', 'babel-preset-stage-0', 'babel-preset-react'
    ], { saveDev: true });

    this.npmInstall([
      'react', 'react-dom', 'redux', 'react-redux'
    ], { save: true });
  }
});
