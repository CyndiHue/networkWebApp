const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

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
        default: Date.now,
        get: (timestamp) => {
          return new Date(timestamp).toLocaleDateString();
        }
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
  );
  
  thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

  const Thought = model('thought', thoughtSchema);

module.exports = Thought;
