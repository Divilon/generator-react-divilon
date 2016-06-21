# generator-react-divilon [![Build Status][travis-image]][travis-url]
Generate opinionated react applications.

It generates basic react application using
webpack and babel to process `JSX`.

Here in Divilon we often doing front-end for java application.
So generator supports source layouts feasible for `gradle` and `maven`
project source layout.

## Features

### Layouts
Generator supports laying out sources in a `gradle` and `maven` friendly manner.
For both maven and gradle sources are generated into `src/main/webapp` directory.
Build results are in `target/www` and `build/www` for maven and gradle respectively.
Please take a look at brilliant [JHipster](https://jhipster.github.io/) for insights
on how to handle this type of layout with java build tools (more support for
maven and especially gradle is planned)

### Proxying
When running on top of existing server it is handy to proxy this server while
developing front-end. When you have Spring Boot REST service as backend you can
proxy it and get all benefits of live reloading and HMR with your webpack dev server
running on different port. Default dev server port is 8080, however if proxied url
is on default port it changes to `8081`.

## Generated application
`react-divilon` generates [React](https://facebook.github.io/react/docs/getting-started.html)
based front-end application backed by [Redux](https://github.com/reactjs/redux)

Application is build using [webpack](http://webpack.github.io/).
Dev server is added to run either as standalone server of proxy to existing REST backend.
Dev server enables rebuilds on file change as well as browser live reloading.

### Application layout
```
+ actions/           # redux actions and action creators
+ components/        # application components
+- hello/            # directory for particular component
+ reducers/          # contains application reducers
+- index.js          # groups reducers by properties and exports it as object
+ application.js     # application entry point
+ configureStore.js  # set up redux store with middlewares and combined reducers
```

## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-divilon using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
```

This generator is not published to npm yet.
In order to use it clone it from github and link

```bash
git clone git@github.com:Divilon/generator-react-divilon.git
cd generator-react-divilon
npm link
```

Then generate your new project:

```bash
yo react-divilon
```

[travis-image]: https://travis-ci.org/Divilon/generator-react-divilon.svg?branch=master
[travis-url]: https://travis-ci.org/Divilon/generator-react-divilon
