const fs = require("fs-extra");
const path = require("path");
const logOutput = require("cypress-log-to-output");
const webpackPreprocessor = require("@cypress/webpack-preprocessor");

module.exports = (on, config) => {
	on("before:browser:launch", (browser = {}, launchOptions) => {
		if (browser.family === "chromium" && browser.name !== "electron") {
			launchOptions.args.push("--disable-dev-shm-usage");
		}

		return launchOptions;
	});

	const options = {
		webpackOptions: require("../../webpack.config"),
    watchOptions: {}
	};
  // @ts-ignore
	on("file:preprocessor", webpackPreprocessor(options));

	logOutput.install(on, (_type, event) => {
		return event.level === "error" || event.type === "error";
	});

	const environment = config.env.configFile;

	if (environment !== undefined) {
		return getConfigurationByFile(environment);
	}

	return config;
};

function getConfigurationByFile(file) {
	const pathToConfigFile = `config/${file}.json`;

	return fs.readJson(path.join(__dirname, "./../", pathToConfigFile));
}
