const KEY = "377ef591";
const URL = `http://www.omdbapi.com/?apikey=${KEY}`;

export const searchMovie = async (searchTerm) => {
  try {
    const response = await fetch(`${URL}&s=${searchTerm}`);
    const data = await response.json();
    console.log(data.Search);
    return data.Search;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default { searchMovie };
