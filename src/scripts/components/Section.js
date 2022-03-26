class Section {
  constructor({items, renderer}, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer; // renderer — это функция
    this._container = document.querySelector(containerSelector);
  }

  renderItems(data) {
    data.forEach(item => this._renderer(item));
  }

  addItem(element) {
    this._container.prepend(element);
  }
}

export default Section;
