//the main module
import gulp from "gulp";
//import paths
import { path } from "./gulp/config/path.js";

// passing value to global variable
global.app = {
	path: path,
	gulp: gulp
}

//task import
import { copy } from "./gulp/tasks/copy.js";

//default script execution
gulp.task('default', copy);