const Donut = require('../../models/jersey');

module.exports = {
  index,
  create,
  delete: deleteJersey,
  createComment
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

async function deleteJersey(req, res) {
  req.body.user = req.user._id;
  const jersey = await Jersey.findByIdAndDelete(req.params.id);
  res.json(jersey);
}

async function createComment(req, res) {
  try {
    req.body.user = req.user._id;
    const jersey = await Jersey.findById(req.params.id);
    jersey.comments.push(req.body);
    jersey.save();
    res.json(jersey);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}