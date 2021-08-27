// list Dependencies
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefix = require("gulp-autoprefixer");

// minifiy opt
// const minify = require("gulp-clean-css");
// const rename = require("gulp-rename");

// function
function compilescss() {
    return src("./src/dist/scss/style.scss", {sourcemaps: true })
                .pipe(sass().on('error', sass.logError))
                .pipe(prefix('last 3 versions'))
                .pipe(dest("./src/dist/css", { sourcemaps: '.'}));
}

// watchTask
function watchTask() {
    watch("./src/dist/scss/**/*.scss", compilescss);
}

// default gulp
exports.default = series(compilescss, watchTask);
