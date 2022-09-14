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
import { reset } from "./gulp/tasks/reset.js";

//change watcher
function watcher() {
	gulp.watch(path.watch.files, copy)
}

//building scenarios for executing tasks
const dev = gulp.series(reset, copy, watcher);

//default script execution
gulp.task('default', dev);