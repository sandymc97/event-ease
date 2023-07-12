const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mentalSchema = new Schema({
  status: {
    type: String,
    enum: ['Calm','Happy','Overwhelmed','Anxious or Nervous', 'Sad', 'Angry']
  }
}, {
  timestamps: true
});



const taskSchema = new Schema({
  day: {
    type: Date,
  },
  category: {
    type: String,
    enum: ['Work', 'Self-Care', 'Misc']
  },
  task: { 
   type: String, 
   required: true 
  },
  mentalStatus: [mentalSchema]
}, {
  timestamps: true
});  


module.exports = mongoose.model('Task', taskSchema);