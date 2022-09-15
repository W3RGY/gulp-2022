//the main module
import gulp from "gulp";
//import paths
import { path } from "./gulp/config/path.js";
//
import { plugins } from "./gulp/config/plugins.js";

// passing value to global variable
global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins
}

//task import
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";

//change watcher
function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.css, scss);
}

const mainTasks = gulp.parallel(copy, html, scss);

//building scenarios for executing tasks
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

//default script execution
gulp.task('default', dev);