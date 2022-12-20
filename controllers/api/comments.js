const Donut = require('../../models/jersey');

module.exports = {
  index,
  createComment,
  updateComment,
  deleteComment
};

async function index(req, res) {
  const comments = await Jersey.comments.getAll();
  res.status(200).json(comments);
}

async function createComment(req, res) {
  try {
    const jersey = await Jersey.findOne(req.params.id);
      jersey.comments.push(req.body);
      jersey.save();
      res.json(jersey);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function updateComment(req, res, next) {
  const jersey = await Jersey.findOne({'comments._id': req.params.id}, req.body);
    const comment = jersey.comments.id(req.params.id);
    await comment.save();
    res.json(comment);
}

async function deleteComment(req, res) {
  const jersey = await Jersey.findOne({'comments._id': req.params.id});
    jersey.comments.remove(req.params.id);
    await jersey.save();
    res.json(jersey);
}