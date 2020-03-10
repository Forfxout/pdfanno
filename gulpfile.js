var gulp = require('gulp');
var fs = require('fs-extra');
var path = require('path');

gulp.task('prepare', gulp.series((cb) => {
    fs.removeSync('dist');
    fs.copySync('build', path.join('dist', 'build'));
    fs.copySync('pages', path.join('dist', 'pages'));
    fs.copySync('pdfs', path.join('dist', 'pdfs'));
    cb();
}));

gulp.task('publish', gulp.series((cb) => {
    fs.removeSync('docs');
    fs.copySync('dist', 'docs');
    cb();
}));
