const gulp = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      del = require('del'),
      browserSync = require('browser-sync').create(),
      sourcemaps = require('gulp-sourcemaps'),
      gulpif = require('gulp-if'),
      gcmq = require('gulp-group-css-media-queries'),
      imagemin = require('gulp-imagemin'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      jade = require('gulp-jade'),
      less = require('gulp-less'),
      smartgrid = require('smart-grid');

const isDev = process.argv.indexOf('--dev') !== -1,
      isProd = !isDev,
      isSync = process.argv.indexOf('--sync') !== -1;

const base = './develop/',
      src = './develop/assets/',
      prod = './build/',
      dist = './build/assets/';

let gridOptions = {
   columns: 24,
   offset: "20px",
   // mobileFirst: true,
   container: {
      maxWidth: "1120px",
      fields: "0" // fields не меньше offset делённого на 2
   },
   breakPoints: {
      xxl: {
         width: "1235px",
         fields: "60px"
      },
      xl: {
         width: "1190px",
      },
      ll: {
         width: "970px"
      },
      lg: {
         width: "890px"
      },
      middle: {
         width: "768px",
         fields: "42px"
      },
      md: {
         width: "660px",
         fields: "30px"
      },
      sm: {
         width: "590px",
      },
      xs: {
         width: "470px"
      },
      xxs: {
         width: "370px",
         fields: "16px",
         offset: "10px"
      },
      tiny: {
         width: "320px"
      }
   }
};


function html(done){
   return gulp.src( base + '*.jade' )
   .pipe(jade({pretty: true}))
   .pipe(gulp.dest( prod ))
   .pipe(gulpif(isSync, browserSync.stream()));
   done();
}
function htmlLK(done){
   return gulp.src( base + 'lk/*.jade' )
   .pipe(jade({pretty: true}))
   .pipe(gulp.dest( prod + 'lk/' ))
   .pipe(gulpif(isSync, browserSync.stream()));
   done();
}

function styles(){
   return gulp.src( [ src + 'css/style.less' ])
   .pipe(gulpif(isDev, sourcemaps.init()))
   .pipe(less())
   .pipe(gcmq())
   .pipe(autoprefixer())
   .pipe(gulpif(isProd, cleanCSS({
      level: 2
   })))
   .pipe(gulpif(isDev, sourcemaps.write() ))
   .pipe(gulp.dest( dist + 'css'))
   .pipe(gulpif(isSync, browserSync.stream()))
}

function images(done){
   return gulp.src( src + 'images/**/*')
   .pipe(gulpif(isProd, imagemin()))
   .pipe(gulp.dest( dist + 'images'));
   done();
}
function data(done){
   return gulp.src([src + 'images/*', src + 'images/**/*'])
   .pipe(gulp.dest( dist + 'images'));
   done();
}
function fonts(done){
   return gulp.src(src + 'fonts/**/*')
   .pipe(gulp.dest( dist + 'fonts/'));
   done();
}
function js(done){
   return gulp.src(src + 'js/*')
   .pipe(gulp.dest( dist + 'js'));
   done();
}
// .pipe(gulpif(isProd, uglify()))
function clear(){
   return del( prod + '*');
}


function watch(done){
   if(isSync){
      browserSync.init({
         server: {
            baseDir: './build/'
         }
      });
   }
   
   gulp.watch( src + 'css/**/*.less', styles);
   gulp.watch( base + '*.jade', html);
   gulp.watch( src + 'jade/**/*.jade', html);
   gulp.watch( base + 'lk/*.jade', htmlLK);
   gulp.watch( base + 'lk/basket/**/*.jade', htmlLK);
   gulp.watch( base + 'lk/basket/order/*.jade', htmlLK);
   gulp.watch( base + 'lk/**/**/*.jade', htmlLK);
   gulp.watch( base + 'lk/personal_account/*.jade', htmlLK);
   gulp.watch( base + 'lk/personal_account/my_account/*.jade', htmlLK);
   gulp.watch( base + 'lk/personal_account/order_history/*.jade', htmlLK);
   gulp.watch( base + 'lk/personal_account/one_order/*.jade', htmlLK);
   gulp.watch( base + 'lk/personal_account/payment_history/*.jade', htmlLK);
   gulp.watch( base + 'lk/personal_account/delivery_addresses/*.jade', htmlLK);
   gulp.watch( base + 'lk/personal_account/settings/*.jade', htmlLK);
   gulp.watch( src + 'images/**/*', images);
   gulp.watch( src + 'images/*', data);
   gulp.watch( src + 'images/**/*', data);
   gulp.watch( src + 'images/**/*', data);
   gulp.watch( src + 'js/*', js);
   done();
}

function grid(done){
   smartgrid( src + 'css/base', gridOptions);
   done();
}

const build = gulp.series(clear,
   gulp.parallel(html, htmlLK, styles, js, images, data, fonts )
);

gulp.task('build', build);
gulp.task('watch', gulp.series(build, watch));
gulp.task('grid', gulp.parallel(grid));
gulp.task('fonts', fonts);
gulp.task('js', js);
gulp.task('data', data);
