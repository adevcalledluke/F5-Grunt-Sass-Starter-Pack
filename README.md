# Foundation 5 with Grunt and Libsass, also includes Uglify and Autoprefixer

This is a base Foundation 5 template that uses Grunt and Libsass, use this to start a new project.

## Requirements

You'll need to have the following items installed on your computer before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`

## Quickstart

```
git clone https://github.com/adevcalledluke/F5-Grunt-Sass-Starter-Pack.git
npm install && bower install
```

While you're working on your project, run:

`grunt`

And you're set!

## Directory Structure
Sass
  * `scss/global/_settings.scss`: Foundation configuration settings go in here
  * `scss/main.scss`: Application styles go here
  
JS
  * `js/components`: Add all your JS Components here, they will be compiled into `main.js`
