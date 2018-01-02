const defaults = {};

class ComponentName {
  constructor(element, options) {
    this.element = element;
    this.options = Object.assign({}, defaults, options);
  }
}

export default ComponentName;
