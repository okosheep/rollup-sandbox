import typescript from "rollup-plugin-typescript2"
import nodeResolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"

export default {
  input: ["./lib/index.ts"],
  output: [
    {
      dir: "dist",
      exports: "auto",
      format: "esm"
    }
  ],
  preserveEntrySignatures: false,
  external: ["crypto-js/sha256"],
  plugins: [
    typescript(),
    nodeResolve(),
    commonjs(),
  ],
}
