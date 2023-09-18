const { Schema, model } = require('mongoose');
// const assignmentSchema = require('./Assignment');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // validate: {
      //   validator: () => Promise.resolve(false),
      //   message: 'Email validation failed'
      // }
      // ask about validate documentation
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    
    },
  // todo: Array of _id values referencing the models above
  // todo:Schema Settings:Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
  {
    toJSON: {
      getters: true,
    },
    // what does line 40 and 41 mean?
  }
);

const User = model('User', userSchema);

module.exports = User;
