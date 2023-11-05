export default class CountryItem {
  constructor(item) {
    this.item = item;
    this.name = item.name;
  }

  render() {
    const article = document.createElement("div");
    article.classList.add("results__wrapper__list__container__item");
    const itemBasic = `
    <span>${this.name.common}</span>
    `;
    article.innerHTML = itemBasic;
    return article;
  }
}
