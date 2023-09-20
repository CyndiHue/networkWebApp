const { Thought, User, Reaction } = require('../models');

module.exports = {
    // Get all Thoughts
async getThoughts(req, res) {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
},
// Get a Thought
async getSingleThought(req, res) {
  try {
    const thought = await Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v');

    if (!thought) {
      return res.status(404).json({ message: 'No thought with that ID' });
    }

    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
},

async createThought(req, res) {
  try {
    const thought = await Thought.create(req.body);
    const user = await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $addToSet: { thoughts: thought._id } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        message: 'thought created, but found no user with that ID',
      });
    }

    res.json('Created the thought 🎉');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
},

async deleteThought(req, res) {
  try {
    const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

    if (!thought) {
      return res.status(404).json({ message: 'No thought with that ID' });
    }

    await User.deleteMany({ _id: { $in: thought.users } });
    res.json({ message: 'thought and users deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
},

async updateThought(req, res) {
try {
  const thought = await Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $set: req.body },
  );

  if (!thought) {
    return res.status(404).json({ message: 'No thought with this id!' });
  }

  res.json(thought);
} catch (err) {
  res.status(500).json(err);
}
},
     // Add an reaction to a user
     async addReaction(req, res) {
      try {
        const thought = await Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: { reactions: req.body } },
          { runValidators: true, new: true }
        );
  
        if (!thought) {
          return res.status(404).json({ message: 'No thought with this id!' });
        }
  
        res.json(thought);
      } catch (err) {
        res.status(500).json(err);
      }
    },
   
    // Remove reaction from a user
    async removeReaction(req, res) {
      try {
        const thought = await Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: { reactions: { reactionId: req.params.reactionId } } },
          { runValidators: true, new: true }
        )
  
        if (!thought) {
          return res.status(404).json({ message: 'No thought with this id!' });
        }
  
        res.json("reaction deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    },
}
