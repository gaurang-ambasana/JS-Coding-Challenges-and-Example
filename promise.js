const fetchData = async () => {
  //use any API/URL
  const { data } = await fetch("https://www.zapya.com/"); // awaits for network call to return something
  return data; // returns destructured data
};

fetchData() // can't assign directly to variable as it's async
  .then((res) => console.log(res)) // once data is retrived logs it
  .catch((err) => console.error(err)); // handling error if any

// Warning : Won't work with Node as Fetch is WebAPI associated with Web Browser
// You can use it while attached to index.html or as script with any html
