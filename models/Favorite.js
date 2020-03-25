const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  //id of favorite
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  //overview
  text: {
    type: String,
    required: true
  },
  //title
  name: {
    type: String
  },
  //date for sorting
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Favorite = mongoose.model('favorite', FavoriteSchema);
