const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxLength: 280
    },
    createdAt: {
        type: Date,
        default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),

        // Date
        // Set default value to the current timestamp
        // Use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    reactions: {
    //   Array of nested documents created with the reactionSchema
    },
  },
//   todo: Schema Settings Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
