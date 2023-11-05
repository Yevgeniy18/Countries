import CountryFilter from "./Filter";

export default class SearchBar {
  constructor(data) {
    this.data = data;
    this.searchedCounty = "";
    this.search = document.getElementById("search");
  }

  // Function for tracking  the presence of required element on the page
  waitForElementToExist(selector) {
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver((mutations) => {
        if (document.querySelector(selector)) {
          observer.disconnect();
          resolve(document.querySelector(selector));
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }

  //------------------------------------------------------------------

  renderSearchBar() {
    // Rendering search form
    search.innerHTML = ` <form> <input id="query" name="query" type="text" placeholder="Type in a country name.."/>
                          <div><button type="submit">Search</button></div> </form>`;
  }

  getInputValue() {
    // Checking if the element on the page is loaded before retrieving the value
    this.waitForElementToExist("form").then((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        let inputEl = e.currentTarget[0];

        const data = new FormData(e.target);
        const searchedCountry = data.get("query");

        if (searchedCountry === "") {
          inputEl.setAttribute("error", true);
        } else {
          inputEl.removeAttribute("error");
          let filters = new CountryFilter(searchedCountry);
          filters.filterByName();
        }
      });
    });
  }
}
