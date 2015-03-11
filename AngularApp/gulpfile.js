var gulp = require('gulp'),
	bowerFiles = require('main-bower-files'),
	inject = require('gulp-inject'),
	es = require('event-stream'),
	angularFilesort = require('gulp-angular-filesort'),
	less = require('gulp-less'),
	templateCache = require('gulp-angular-templatecache'),
	minifyHTML = require('gulp-minify-html'),
	ngAnnotate = require('gulp-ng-annotate');


gulp.task('build', function(){
	var cssFiles = gulp.src('./content/styles/app.less')
		.pipe(less());
		//.pipe(gulp.dest('./build'));

	var jsFiles = gulp.src('./app/**/*.js')
		.pipe(angularFilesort())
		.pipe(ngAnnotate({
			add: true,
			single_quotes: true
		}));

	return gulp.src('./views/shared/_Layout.cshtml')
		.pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower', base: 'vendor'}))
		.pipe(inject(es.merge(
			cssFiles,
			jsFiles
		)))
		.pipe(gulp.dest('./views/shared'));
});


gulp.task('templates', function() {
	return gulp.src('./app/**/*.html')
		.pipe(minifyHTML({
			empty: true,
			spare: true,
			quotes: true
		}))
		.pipe(templateCache({
			standalone: true
		}))
		.pipe(gulp.dest('app'));
});


gulp.task('default',['templates','build'], function(){
	gulp.watch('app/**/*.js', ['build']);
	gulp.watch('app/**/*.html', ['templates']);
	gulp.watch('content/styles/app.less', ['build']);
});

