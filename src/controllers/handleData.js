const fetch = require('node-fetch');

const handleData = (req, res, next) => {
  const { country } = req.params;
  const apiKey = process.env.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&apikey=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

module.exports = handleData;
