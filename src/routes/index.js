const router = require('express').Router();
const {
  handleData, clientError, serverError,
} = require('../controllers');

router.get('/search/:country', handleData);

router.use(clientError);
router.use(serverError);

module.exports = router;
