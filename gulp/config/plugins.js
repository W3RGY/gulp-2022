import replace from "gulp-replace"; //search and replace
import plumber from "gulp-plumber"; //error processing
import notify from "gulp-notify"; //message (hint)
import browsersync from "browser-sync" //local server
import newer from "gulp-newer"; //check for updates

export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browsersync: browsersync,
	newer: newer
}