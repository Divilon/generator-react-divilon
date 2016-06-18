'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

/**
 * Supported source layouts. Configures generator with
 * directories for placing sources and built files.
 */
var layouts = {
  node: {
    sourceDir: 'src',
    destDir: 'build'
  },
  gradle: {
    sourceDir: 'src/main/webapp',
    destDir: 'build/www'
  },
  maven: {
    sourceDir: 'src/main/webapp',
    destDir: 'target/www'
  }
};

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

    var prompts = [{
      name: 'layout',
      message: 'Which type of source layout you prefer?',
      type: 'list',
      choices: Object.keys(layouts),
      default: 'node',
      store: true
    }, {
      name: 'proxy',
      message: 'Provide url you dev server will proxy (or ' + chalk.green('none') + ' for no proxy)',
      type: 'input',
      default: 'none',
      store: true
    }];

    return this.prompt(prompts).then(function (answers) {
      // To access props later use this.props.someAnswer;
      this.props = answers;
      this.config.set(answers);
    }.bind(this));
  },

  writing: {
    configuration: function () {
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

      var layout = layouts[this.props.layout];
      var proxyUrl = this.props.proxy === 'none' ? false : this.props.proxy;
      var devServerPort = 8080;
      if (this.props.proxy.search(':8080') > -1) { // default dev server port is occupied
        devServerPort = 8081;
        this.log('Default dev server port is proxyed. Using ' + chalk.green(devServerPort) + ' instead');
      }
      this.fs.copyTpl(
        this.templatePath('webpack.config.js'),
        this.destinationPath('webpack.config.js'),
        {
          sourceDir: layout.sourceDir,
          destDir: layout.destDir,
          proxyUrl: proxyUrl,
          devServerPort: devServerPort
        }
      );
    },
    application: function () {
      var layout = layouts[this.props.layout];
      this.fs.copyTpl(
        this.templatePath('src/index.html'),
        this.destinationPath(layout.sourceDir + '/index.html'),
        { title: _.startCase(this.appname) }
      );
      this.fs.copyTpl(
        this.templatePath('src/js/application.js'),
        this.destinationPath(layout.sourceDir + '/js/application.js'),
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
