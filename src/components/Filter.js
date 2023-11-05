import CountriesList from "../views/CountriesList";

export default class CountryFilter {
  constructor(value) {
    this.query = value;
    this.loading = false;
    this.baseUrl = "https://restcountries.com/v3.1/name/";
  }

  async filterByName() {
    const res = await fetch(this.baseUrl + this.query)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("something went wrong");
      })
      .then((data) => {
        return new CountriesList(data).render();
      })
      .catch((err) => {
        return new CountriesList().notFoundError();
      });

  }
}
