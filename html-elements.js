function HTMLElement() {
  this.click = function () {
    console.log('clicked');
  };
}

HTMLElement.prototype.focus = function () {
  console.log('focused');
};

function HTMLSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };
}

// HTMLSelectElement.prototype = Object.create(HTMLElement.prototype);
HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;
