const path = require('path');

const installedDependencies = require("../shared/package.json").dependencies;

const extraNodeModules = {};
Object.keys(installedDependencies).forEach(dep => {
  extraNodeModules[dep] = path.resolve(__dirname, "node_modules", dep);
});

module.exports = {
  /**
   * Add "global" dependencies for our RN project here so that our local components can resolve their
   * dependencies correctly
   */
  resolver: {
    extraNodeModules: extraNodeModules
  },

  /**
   * Add our workspace roots so that react native can find the source code for the included packages
   * in the monorepo
   */
  projectRoot: path.resolve(__dirname),
  watchFolders: [
    path.resolve(__dirname, "../shared/store"),
    path.resolve(__dirname, "../shared/theme"),
    path.resolve(__dirname, "node_modules")
  ],

};