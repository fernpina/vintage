const express = require('express');
const router = express.Router();
const jerseysCtrl = require('../../controllers/api/jerseys');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', jerseysCtrl.index);
router.post('/new', jerseysCtrl.create);
router.put('/:id/update', ensureLoggedIn, jerseysCtrl.updateJersey);
router.delete('/:id', ensureLoggedIn, jerseysCtrl.delete);


module.exports = router;