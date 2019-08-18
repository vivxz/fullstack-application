const router = require('express').Router();
const controller = require('./controller.js')

router
  .route('/order')
  .get(controller.get)
  .post(controller.post)

router
  .route('/order/:_id')
  .delete(controller.delete)
  .put(controller.update)

router
  .route('/username')
  .get(controller.getUsername)

module.exports = router;