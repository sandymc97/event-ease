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


const noteSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
   },{
    timestamps: true,
});



const taskSchema = new Schema(
  {
    dayOfTheWeek: {
      type: String,
      required: true,
      enum: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },
    category: {
      type: String,
      enum: ["Work", "Self-Care", "Misc"],
    },
    task: {
      type: String,
    },
    mentalStatuses: [mentalSchema],
    notes: [noteSchema],
  },
  {
    timestamps: true,
  }
);  

module.exports = mongoose.model('Task', taskSchema);