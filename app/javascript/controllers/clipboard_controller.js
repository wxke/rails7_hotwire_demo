import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["source"];
  static classes = ["supported"];

  connect() {
    if ("clipboard" in navigator) {
      console.log("-----", this.element.classList);
      this.element.classList.add(this.supportedClass);
      console.log("-----", this.element.classList);
    }
  }

  copy() {
    navigator.clipboard.writeText(this.source);
    console.log("copy success");
  }

  get source() {
    return this.sourceTarget.value;
  }
}
