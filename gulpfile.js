var gulp = require('gulp');
var fileinclude  = require('gulp-file-include');

gulp.task('fileinclude', function() {
    gulp.src(['src/**.html', 'src/html/ptgk/**.html', 'src/html/cytd/**.html', 'src/html/gyfw/**.html', 'src/html/rhjr/**.html', 'src/html/rzhqy/**.html', 'src/html/wtzx/**.html', 'src/html/zhfzhch/**.html', 'src/html/**.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist'));
});