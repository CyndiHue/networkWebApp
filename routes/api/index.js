const router = require('express').Router();
const courseRoutes = require('./thoughtsRoutes.js');
const studentRoutes = require('./usersRoutes.js');

router.use('/thoughts', thoughtsRoutes);
router.use('/users', usersRoutes);

module.exports = router;
