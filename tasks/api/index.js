const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const gip = document.getElementById("gip");
const loading = document.getElementById("loading");

loading.style.display = "none";

searchInput.addEventListener("keyup", async () => {
  loading.style.display = "flex";
  gip.innerHTML = "";
  const { data } = await getGiphyData(searchInput.value);

  loading.style.display = "none";

  data.forEach((element) => {
    const imgTag = `<img src=${element.images.original.url} />`;

    gip.innerHTML += imgTag;
  });
});

const getGiphyData = async (searchInput) => {
  const url = `https://api.giphy.com/v1/videos/search?q=${searchInput}&limit=20&api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g`;

  const result = await fetch(url);

  return result.json();
};
