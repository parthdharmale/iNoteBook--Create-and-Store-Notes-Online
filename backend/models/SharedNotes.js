const mongoose = require('mongoose');
const { Schema } = mongoose;

const SharedNotesSchema = new Schema({
    user1:{
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'user'
    },
    user2:{
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        default: "general"
    },
    date:{
        type: Date,
        default: Date.now
    },

  });

  const SharedNotes = mongoose.model('sharednotes', SharedNotesSchema);
  SharedNotes.createIndexes();
  module.exports = SharedNotes;