import typescript from "rollup-plugin-typescript2"
import nodeResolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"

export default {
  input: "./lib/index.ts",
  output: [
    {
      file: "./dist/index.js",
      format: "cjs",
    },
    {
      file: "./dist/index.mjs",
      format: "es",
    },
  ],
  external: require("./package.json").dependencies || [],
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: "es2015",
          moduleResolution: "node",
        },
      },
    }),
    nodeResolve(),
    commonjs(),
  ],
}
