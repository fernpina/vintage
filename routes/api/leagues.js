const express = require('express');
const router = express.Router();
const leaguesCtrl = require('../../controllers/api/leagues');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', leaguesCtrl.index);
router.post('/new', leaguesCtrl.create);
router.delete('/:id', ensureLoggedIn, leaguesCtrl.delete);

router.post('/:id/reviews', ensureLoggedIn, leaguesCtrl.createReview);

module.exports = router;