import Environment from "jest-environment-jsdom"
import { TextEncoder, TextDecoder } from 'util'

export default class CustomTestEnvironment extends Environment {
  async setup() {
    await super.setup()
    if (typeof this.global.TextEncoder === "undefined") {
        this.global.TextEncoder = TextEncoder
        this.global.TextDecoder = TextDecoder
        this.global.Uint8Array = Uint8Array
    }
  }
}
