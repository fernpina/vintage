const Donut = require('../../models/jersey');

module.exports = {
  index,
  create,
  updateJersey,
  delete: deleteJersey,
};

async function index(req, res) {
  const jerseys = await Jersey.find({});
  res.status(200).json(jerseys);
}

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    const jersey = await Jersey.create(req.body);
    jersey.save();
    res.json(jersey);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function updateJersey(req, res, next) {
  await Jersey.findByIdAndUpdate({_id: req.params.id}, req.body);
    const jersey = await Jersey.find({user: req.user._id});
    res.json(jersey);
}

async function deleteJersey(req, res) {
  req.body.user = req.user._id;
  const jersey = await Jersey.findByIdAndDelete(req.params.id);
  res.json(jersey);
}
