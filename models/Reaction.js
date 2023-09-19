const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    assignmentName: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => {
        return new Date(timestamp).toLocaleDateString();
      }
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
