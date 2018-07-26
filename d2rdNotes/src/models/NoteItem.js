const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const NoteItem = mongoose.Schema({
  title: {type: String, required: true},
  priority: {type: Number, required: true},
  body: {type: String, required: true},
  urlAddress: String,
  reviewURL: String,
  collectionName: {
    type: ObjectId,
    ref: 'ElectricUprights'}
})

module.exports = mongoose.model('Character', Character)