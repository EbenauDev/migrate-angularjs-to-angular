let { src, dest, task, series } = require("gulp");
let inject = require('gulp-inject');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var injectTemplate = require('gulp-js-html-inject');
var less = require('gulp-less');
var path = require('path');



const arquivos = require('./app/index');


task('compile-libs', () => {
    return src([
        './node_modules/angular/angular.min.js',
        './node_modules/angular-animate/angular-animate.min.js',
        './node_modules/angular-ui-router/release/angular-ui-router.min.js',
    ])
        .pipe(concat('1-libs-app.js'))
        .pipe(dest('assets/js/'))
        .pipe(notify({ message: "JS files successfully concated and reduced" }));
});



task('compile-dev', () => {
    return src(arquivos, {
        allowEmpty: true,
    }).pipe(injectTemplate({
        pattern: /'@@import ([a-zA-Z0-9\-_.\\/]+)'/g
    }))
        .pipe(concat('2-main-app.js'))
        .pipe(dest('assets/js/'))
        .pipe(notify({ message: "JS files successfully concated and reduced" }));
});


task('compile-less', () => {
    return src('./assets/less/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(concat('1-main-app.css'))
        .pipe(dest('./assets/css/'));
});



task('inject-js', () => {
    var target = src('./index.html');
    var sources = src(['./assets/js/*.js']);
    return target.pipe(inject(sources))
        .pipe(dest('./'));
});

task('inject-css', () => {
    var target = src('./index.html');
    var sources = src(['./assets/css/*.css']);
    return target.pipe(inject(sources))
        .pipe(dest('./'));
})

task('dev', series(
    'compile-libs',
    'compile-dev',
    'compile-less',
    'inject-js',
    'inject-css',
))