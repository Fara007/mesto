export default class Section {
  constructor({ items, renderer }, selector) {
      this._renderedItems = items;
      this._renderer = renderer; // renderer — это функция
      this._container = selector;
  }

  renderItems() {
      this._renderedItems.map(item => this._renderer(item));
  }

  setItem(element) {
      this._container.append(element);
  }
}
