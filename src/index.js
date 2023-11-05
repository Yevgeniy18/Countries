import SearchBar from "../src/components/SearchBar.js";
import CountriesList from "../src/views/CountriesList.js";

class App {
  constructor() {
    this.countriesData = [];
    this.searchBar = new SearchBar();
    this.displayedItems = new CountriesList();
    this.resultsContainer = document.getElementById("results");
  }

  initializeElements() {
    this.searchBar.renderSearchBar();
    this.searchBar.getInputValue();
  }

  run() {
    this.initializeElements();
    this.displayedItems.render();
  }
}

let app = new App();
app.run();
