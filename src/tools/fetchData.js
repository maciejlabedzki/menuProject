const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      // response
    })
    .catch((err) => {
      // error catch
    });
};

export default fetchData;
