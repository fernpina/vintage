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
    const jersey = await Jersey.findById(req.params.id);
      req.body.user = req.user._id;
      jersey.comments.push(req.body);
      await jersey.save();
      const jerseys = await Jersey.find({});
      res.json(jerseys);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function updateComment(req, res, next) {
  try {
    const jersey = await Jersey.findOne({'comments._id': req.params.id});
      const comment = jersey.comments.id(req.params.id);
      comment.content = req.body.content;
      await jersey.save();
      const jerseys = await Jersey.find({});
      res.json(jerseys);
  } catch (err) {
    console.log(err);
  }
}

async function deleteComment(req, res) {
  const jersey = await Jersey.findOne({'comments._id': req.params.id});
    jersey.comments.remove(req.params.id);
    await jersey.save();
    const jerseys = await Jersey.find({});
    res.json(jerseys);
}