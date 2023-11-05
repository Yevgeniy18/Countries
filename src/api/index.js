export const getCountries = async () => {
  let res = await fetch("https://restcountries.com/v3.1/all");
  let data = await res.json();

  return {
    countries: data
  };
};
