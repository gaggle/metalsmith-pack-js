# metalsmith-pack-js
An opinionated metalsmith plugin
that packs Javascript files.

It calls [metalsmith-webpack], 
[metalsmith-babel], 
and [metalsmith-uglifyjs] 
to do its job.

```js
const packjs = require("metalsmith-pack-js")
metalsmith.use(packjs({
  root: path.resolve(__dirname, ".source"),
  entry: "./main.js",
  mangle: true,
}))
```

[metalsmith-webpack]: https://github.com/christophercliff/metalsmith-webpack
[metalsmith-babel]: https://github.com/babel/metalsmith-babel
[metalsmith-uglifyjs]: https://github.com/borisovg/metalsmith-uglify
