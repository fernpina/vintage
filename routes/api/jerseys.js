const express = require('express');
const router = express.Router();
const jerseysCtrl = require('../../controllers/api/jerseys');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', jerseysCtrl.index);
router.post('/new', jerseysCtrl.create);
router.delete('/:id', ensureLoggedIn, jerseysCtrl.delete);

router.post('/:id/comments', ensureLoggedIn, jerseysCtrl.createComment);

module.exports = router;