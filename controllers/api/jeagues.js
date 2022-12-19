const Shop = require('../../models/shop');

module.exports = {
  index,
  create,
  delete: deleteLeague,
  createReview
};

async function index(req, res) {
  const leagues = await League.find({});
  res.status(200).json(leagues);
}

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    const league = await League.create(req.body);
    league.save();
    res.json(league);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteLeague(req, res) {
  req.body.user = req.user._id;
  const league = await League.findByIdAndDelete(req.params.id);
  res.json(league);
}

async function createReview(req, res) {
  try {
    req.body.user = req.user._id;
    const league = await League.findById(req.params.id);
    league.reviews.push(req.body);
    league.save();
    res.json(league);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}