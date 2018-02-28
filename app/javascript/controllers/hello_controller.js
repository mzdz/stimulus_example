// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "input", "output" ]

  connect() {
    this.outputTarget.textContent = "Hi"
  }

  greet() {
    this.outputTarget.textContent = `Hi, ${this.input}!`
  }

  get input() {
    return this.inputTarget.value
  }
}
