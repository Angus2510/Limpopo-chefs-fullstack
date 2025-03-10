import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  mark: {
    type: String,
  },
  type: {
    type: String,
    enum: [
      "SingleWord",
      "Short",
      "Long",
      "TrueFalse",
      "Match",
      "MultipleChoice",
    ],
    required: true,
  },
  options: {
    type: [
      {
        options: String,
        value: String,
        columnA: String,
        columnAImageUrl: String,
        columnB: String,
        columnBImageUrl: String,
      },
    ],
  },
  correctAnswer: {
    type: mongoose.Schema.Types.Mixed,
  },
});

export default mongoose.model("Question", questionSchema);
