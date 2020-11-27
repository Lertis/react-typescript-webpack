module.exports = {
	"./src/**/*.{tsx,ts}": (filenames) => `jest --bail --findRelatedTests ${filenames} --maxWorkers=5`,
};
