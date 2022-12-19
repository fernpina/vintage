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
  team: {
    type: String,
  },
  league: {
    type: String,
  },
  review: {
    type: String,
  },
  rating: {
    type: Number,
  },
 
  comments: [commentSchema],
  shop: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Jersey', jerseySchema);