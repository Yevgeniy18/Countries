import CountriesList from "../views/CountriesList";

export default class CountryFilter {
  constructor(value) {
    this.query = value;
    this.loading = false;
    this.filteredResults = [];
    this.baseUrl = "https://restcountries.com/v3.1/name/";
  }

  async filterByName() {
    const res = await fetch(this.baseUrl + this.query);
    const data = await res.json();

    return new CountriesList(data).render();
  }
}
