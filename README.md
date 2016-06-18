# generator-react-divilon [![Build Status][travis-image]][travis-url]
Generate opinionated react applications.

It generates basic react application using 
webpack and babel to process `JSX`.

Here in Divilon we often doing front-end for java application.
So generator supports source layouts feasible for `gradle` and `maven` 
project source layout.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-divilon using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
```

This generator is not published to npm yet. 
In order to use it clone it from github and link

```bash
git@github.com:Divilon/generator-react-divilon.git
cd generator-react-divilon
npm link
```

Then generate your new project:

```bash
yo react-divilon
```

[travis-image]: https://travis-ci.org/Divilon/generator-react-divilon.svg?branch=master
[travis-url]: https://travis-ci.org/Divilon/generator-react-divilon

