import sha256 from "crypto-js/sha256"

export const Print = () => {
  const crypted = sha256("Hello World")
  console.log(`Hello World is ${crypted}`)
}
