const userData = [{
    "username": "CynCity",
    "email": "cynCity@gmail.com"
},
{
    "username": "City",
    "email": "city@gmail.com"
},
{
    "username": "Spiderman",
    "email": "spiderman@gmail.com"
},
];

const thoughtsData = [

"Decision Trackers are awesome",
"Find My Phone is a useful app",
"Learn Piano is not very good for learning Piano",
"Starbase Defender is a great game, I love it",
"Tower Defense is okay",
"Monopoly Money is better than real money IMO",
"Movie trailers are just the best parts of a movie distilled into 90 seconds",
"Hello world, this is a comment",
"Social media is a big waste of time",
"Notes is my most used app",
"Messages is open on my computer 24/7",
"Email is open on my computer",
"Compass is never opened",
"Firefox is great for privacy",

]
const thoughtsData = [
    {
      text: 'This is the first thought.',
      user: 'user1', // Reference to the user who created the thought
    },
    {
      text: 'Another thought by user1.',
      user: 'user1',
    },
    {
      text: 'A thought by user2.',
      user: 'user2',
    },
    // Add more thoughts as needed
  ];
  
  const reactionsData = [
    {
      emoji: '👍',
      thought: 'ObjectIdOfThought1', // Reference to the thought the reaction is for
    },
    {
      emoji: '❤️',
      thought: 'ObjectIdOfThought2',
    },
    {
      emoji: '😄',
      thought: 'ObjectIdOfThought1',
    },
    // Add more reactions as needed
  ];

const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const getRandomThought = () => `${thoughts[genRandomIndex(thoughts)]}`;
