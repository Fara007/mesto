class Section {
  constructor({data, renderer}, containerSelector) {
    this._initialArray = data;
    this._renderer = renderer; // renderer — это функция

    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._initialArray.forEach((item) => {
      const cardElement = this._renderer(item)

      this.addItem(cardElement);
    })
  }

  addItem(element) {
    this._container.prepend(element);
  }
}

export default Section;
