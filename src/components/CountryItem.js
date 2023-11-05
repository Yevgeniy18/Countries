export default class CountryItem {
  constructor(item) {
    this.name = item.name;
  }

  render() {
    const article = document.createElement("div");
    const itemBasic = `
    <span>${this.name.common}</span>
    `;
    article.innerHTML = itemBasic;
    return article;
  }

  toggleItemDetails() {}
}
