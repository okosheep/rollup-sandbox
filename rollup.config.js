import typescript from "rollup-plugin-typescript2"
import nodeResolve from "@rollup/plugin-node-resolve"

export default {
  input: ["./lib/index.ts"],
  output: [
    {
      dir: "dist",
      exports: "auto",
      format: "cjs"
    }
  ],
  preserveEntrySignatures: false,
  external: ["crypto-js/sha256"],
  plugins: [
    typescript(),
    nodeResolve(),
  ],
}
