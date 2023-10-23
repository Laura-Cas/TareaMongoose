const{Router} = require('express');
const router = Router();

const {renderIndex, createMovie} = require('../controllers/index.controllers')

router.get('/', renderIndex);
router.get('/create',createMovie);

module.exports = router;
