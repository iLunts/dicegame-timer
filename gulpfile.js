/// <binding AfterBuild='scripts' />
var gulp = require('gulp');

var requireDir = require('require-dir');
requireDir('./gulp-tasks');

// ------------------------------------------------------------------------

// gulp.task('style', ['css.site']);
// gulp.task('scripts', ['scripts.core', 'scripts.iframe', 'scripts.admin', 'scripts.website']);
// gulp.task('svg', ['svg.min', 'svg.inject']);

gulp.task("watch", function () {
	// gulp.watch(["websrc/less/**/*.less"], ["style"]);
	gulp.watch(["websrc/less/**/*.less"], ["css.site"]);
	// gulp.watch(["ClientApp/app/**/*.*"], ["scripts"]);
	// gulp.watch(["web-src/svg/*.svg"], ["svg"]);
});

