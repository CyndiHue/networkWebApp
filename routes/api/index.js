const router = require('express').Router();
const courseRoutes = require('./thoughtsRoutes');
const studentRoutes = require('./usersRoutes');

router.use('/thoughts', thoughtsRoutes);
router.use('/users', usersRoutes);

module.exports = router;
