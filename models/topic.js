const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  parentTopic: {
      type: mongoose.Schema.ObjectId, 
      ref: 'TopicSchema',
      default: null
  }
})

module.exports = mongoose.model('topic', topicSchema)