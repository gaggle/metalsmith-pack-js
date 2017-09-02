"use strict";
const babel = require("metalsmith-babel")
const merge = require("merge")
const Resolver = require("metalsmith-plugin-resolver")
const uglifyjs = require("metalsmith-uglifyjs")
const webpack = require("metalsmith-webpack")

module.exports = function (opts) {
  opts = merge.recursive(true, {
    entry: undefined,
    mangle: undefined,
    output: {
      filename: undefined,
      path: undefined,
    },
    root: undefined,
  }, opts)

  return function (files, metalsmith, done) {
    const resolver = new Resolver(files, metalsmith)

    resolver
      .use(webpack({
        context: opts.root,
        entry: opts.entry,
        output: {
          path: opts.output.path || "/js",
          filename: opts.output.filename || "main.js"
        }
      }))
      .use(babel({
        presets: ["es2015"]
      }))
      .use(uglifyjs({
        src: ["**/*.js", "!**/*.min.js"],
        deleteSources: true,
        uglifyOptions: {
          mangle: opts.mangle,
          compress: {
            unused: opts.mangle
          }
        }
      }))
      .run(done)
  }
}
