const { watch, src, dest, series } = require("gulp");

 

 
function sass2css(done) {
    return src("./sass/app.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./stylesheets"));
    done();
   
}

exports.default = function (done) {
    watch("./sass/**/*.scss", sass2css);
    console.log("test");
done();
};



exports.sass2css = sass2css;
