const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        require: "Enter type of workout"
      },
      name: {
        type: String,
        trim: true,
        require: "Enter name of workout"
      },
      duration: {
        type: Number,
        require: "Enter duration of workout"
      },
      weight:  {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    },
  ],
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
