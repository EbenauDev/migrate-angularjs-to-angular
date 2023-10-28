let { src, dest, task } = require("gulp");
let inject = require('gulp-inject');
let merge = require('merge-stream');
var concat = require('gulp-concat');
var injectTemplate = require('gulp-js-html-inject');


const arquivos = require('./app/index');


task('teste', (done) => {
    return arquivos.map(arquivo => {
        return merge(
            src(arquivo, {
                allowEmpty: true,
            })
                .pipe(injectTemplate({
                    pattern: /Loader.load\(['"]([a-zA-Z0-9\-_.]+)['"]\)/g
                }))
                .pipe(concat('main-app.js'))
                .pipe(dest('assets/js/'))
        )
    });
});