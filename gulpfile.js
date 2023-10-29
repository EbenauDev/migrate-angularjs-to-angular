let { src, dest, task } = require("gulp");
let inject = require('gulp-inject');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var injectTemplate = require('gulp-js-html-inject');


const arquivos = require('./app/index');


task('teste', (done) => {
    console.log('console: ', arquivos);
    return src(arquivos, {
        allowEmpty: true,
    })
        .pipe(injectTemplate({
            pattern: /'@@import ([a-zA-Z0-9\-_.\\/]+)'/g
        }))
        .pipe(concat('main-app.js'))
        .pipe(dest('assets/js/'))
        .pipe(notify({ message: "JS files successfully concated and reduced" }));
});