# networkWebApp

Thank you for visiting this repo. This repo is designed to not only showcase my back-end network setup capabilites but also how to use some of the following technologies in combination with one another:

NoSQL
Express.js for routing
MongoDB database
Mongoose ODM
JavaScript 
Insomia
JSON
Custom APIs

### Walkthrough Video: 

click here to view demo: https://drive.google.com/file/d/1UJSvDOKxmlbZjL3O1p_RQC32qcC892Mz/view?pli=1 

### Custom API Routes

**`/api/users`**

* `GET` all users

* `GET` a single user by its `_id` and populated thought and friend data

* `POST` a new user:

* `PUT` to update a user by its `_id`

* `DELETE` to remove user by its `_id`

---

**`/api/users/:userId/friends/:friendId`**

* `POST` to add a new friend to a user's friend list

* `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

* `GET` to get all thoughts

* `GET` to get a single thought by its `_id`

* `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

* `PUT` to update a thought by its `_id`

* `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value



### References:

[Express.js](https://www.npmjs.com/package/express) 
[Mongoose](https://www.npmjs.com/package/mongoose)
