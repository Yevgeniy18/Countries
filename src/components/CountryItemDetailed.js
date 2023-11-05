export default class CountryItemDetailed {
  constructor(item) {
    this.value = item;
    this.flags = item.flags;
    this.nativeName = Object.values(item.name.nativeName)[0].common;
    this.capital = item.capital[0];
    this.population = item.population;
    this.languages = Object.values(item.languages);
    this.timeZone = item.timezones[0];
    this.currencies = Object.values(item.currencies)[0].name;
    this.borders = item.borders;
    this.detailsContainer = document.querySelector(
      ".results__wrapper__details",
    );
  }

  render() {
    const infoElement = `
    <div class="results__wrapper__details__image"><img src=${
      this.flags.png
    } /></div>
    <div class="results__wrapper__details__info">
    <div class="results__wrapper__details__info__element"><span>Native Name:</span><span>${
      this.nativeName
    }</span></div>
    <div class="results__wrapper__details__info__element"><span>Capital:</span><span>${
      this.capital
    }</span></div>
    <div class="results__wrapper__details__info__element"><span>Population:</span><span>${
      this.population
    }</span></div>
    <div class="results__wrapper__details__info__element"><span>Languages:</span><div class="results__wrapper__details__info__items">
    ${this.languages
      .map((language) => {
        return `<p>${language}</^p>`;
      })
      .join(", ")}
    
    </div></div>
    <div class="results__wrapper__details__info__element"><span>Time Zones:</span><span>${
      this.timeZone
    }</span></div>
    <div class="results__wrapper__details__info__element"><span>Currency name:</span><span>${
      this.currencies
    }</span></div>
    <div class="results__wrapper__details__info__element"><span>Name of border countries:</span>
    <div class="results__wrapper__details__info__items">
    ${
      this.borders &&
      this.borders
        .map((border) => {
          return `<p>${border}</^p>`;
        })
        .join(", ")
    }
    </div>
    </div>
    </div>
    `;
    this.detailsContainer.innerHTML = infoElement;
    return this.detailsContainer;
  }
}
