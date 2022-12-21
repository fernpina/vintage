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
  league: {
    type: String,
  },
  team: {
    type: String,
  },
  year: {
    type: String,
  },
  description: {
    type: String,
  },
  rating: {
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