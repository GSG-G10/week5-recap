const app = require('./server');

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening at http://localhost:${app.get('port')}`);
});
