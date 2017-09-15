//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    css = require('gulp-clean-css'),
    js = require('gulp-uglify'),
    html = require('gulp-htmlmin'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');
 
//定义一个css任务（自定义任务名称）
gulp.task('css', function () {
    gulp.src('css/*.css') //该任务针对的文件
        .pipe(css()) //该任务调用的模块
        .pipe(gulp.dest('dist/css')); //将会在dist/css下生成css文件
});

gulp.task('js', function () {
    gulp.src('js/*.js') 
        .pipe(js()) 
        .pipe(gulp.dest('dist/js')); 
});

gulp.task('html', function () {
    gulp.src('html/*.html') 
        .pipe(html())
        .pipe(gulp.dest('dist/html')); 
});

gulp.task('sass', function () {
    gulp.src('sass/*.scss') 
        .pipe(sass())
        .pipe(gulp.dest('dist/sass')); 
});

// 创建gulp监视任务：监视到scss文件的修改则执行sass任务
gulp.task("watch", function(){
	livereload.listen();
	gulp.watch("sass/*.scss", ["sass"]);
})
 
gulp.task('default',['css', 'js','html','sass']); //定义默认任务 