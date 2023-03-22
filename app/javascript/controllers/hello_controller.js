import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["name"];

  greet() {
    console.log(`Hello, ${this.name}!`);
  }

  connect() {
    console.log("js controller connect");
  }

  get name() {
    return this.nameTarget.value;
  }
}
