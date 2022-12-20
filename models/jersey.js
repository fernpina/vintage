const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true
});

const jerseySchema = new Schema({
  League: {
    type: String,
  },
  Team: {
    type: String,
  },
  Year: {
    type: String,
  },
  Description: {
    type: String,
  },
  Rating: {
    type: Number,
  },

  comments: [commentSchema],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Jersey', jerseySchema);