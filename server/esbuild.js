const path = require("path");
const esbuild = require("esbuild");
const serverDir = "src/";
const entryPoints = [`${serverDir}/server.ts`];

void esbuild.build({
  entryPoints,
  bundle: true,
  minify: true,
  outbase: serverDir,
  platform: "node",
  outfile: path.join(__dirname, "dist", "server.js"),
  sourcemap: false,
  loader: {
    ".html": "text",
    ".yaml": "text",
  },
});
