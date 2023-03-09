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

  this.render = function () {
    return `
<select>${this.items
      .map(
        (item) => `
  <option>${item}</option>`
      )
      .join('')}
</select>`;
  };
}

function HTMLImageElement(src) {
  this.src = src;

  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}

// HTMLSelectElement.prototype = Object.create(HTMLElement.prototype);
HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;
HTMLImageElement.prototype = new HTMLElement();
HTMLImageElement.prototype.constructor = HTMLImageElement;

const htmls = [
  new HTMLSelectElement([1, 2, 3]),
  new HTMLImageElement('https://something.com'),
];

for (let element of htmls) console.log(element.render());
