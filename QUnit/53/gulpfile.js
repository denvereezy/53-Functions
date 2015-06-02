var gulp = require('gulp'),
qunit = require('gulp-qunit');
gulp.task('test', function() {
return gulp.src('./53 FUNCTIONS.html')
.pipe(qunit());
});
gulp.task('go', function(){
console.log("oi!");
});
