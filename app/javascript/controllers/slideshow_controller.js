import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = { index: { type: Number, default: 2 } };
  static targets = ["slide"];

  connect() {
    console.log("-------connect");
  }
  disconnect() {
    console.log("-------disconnect");
  }

  initialize() {
    console.log("-------initialize");
    console.log(this.indexValue);
    console.log(typeof this.indexValue);
  }

  next() {
    this.indexValue++;
  }

  previous({ params }) {
    console.log(params.aaa);
    this.indexValue--;
  }

  indexValueChanged() {
    this.showCurrentSlide();
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index !== this.indexValue;
    });
  }
}
