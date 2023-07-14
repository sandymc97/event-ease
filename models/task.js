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
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: String,
    userAvatar: String,
  },
  {
    timestamps: true,
  }
);

const taskSchema = new Schema(
  {
    daysOfWeek: {
      type: String,
      required: true,
      enum: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    category: {
      type: String,
      enum: ["Work", "Self-Care", "Misc"],
    },
    task: {
      type: String,
      required: true,
    },
    mentalSchema: [mentalSchema],
    notes: [noteSchema],
  },
  {
    timestamps: true,
  }
);  

module.exports = mongoose.model('Task', taskSchema);