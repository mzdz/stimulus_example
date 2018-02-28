import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "slide" ]

    initialize() {
        this.showCurrentSlide()
    }

    next() {
       this.index++
       if(this.index > 3) {
           this.index = 0;
       }
    }

    previous() {
        this.index--
        if(this.index < 0) {
          this.index = 3;
        }
    }

    showCurrentSlide() {
        this.slideTargets.forEach((el, i) => {
            el.classList.toggle("slide--current", this.index == i)
        })
    }

    get index() {
        return parseInt(this.data.get("index") || 0)
    }

    set index(value) {
        this.data.set("index", value)
        this.showCurrentSlide()
    }
}