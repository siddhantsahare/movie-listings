const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Favorite = require('../../models/Favorite');
const User = require('../../models/User');

// @route    POST api/favorites
// @desc     adding to favorites
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('text', 'Text is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newFavorite = new Favorite({
        text: req.body.text,
        name: user.name,
        user: req.user.id
      });

      const favorite = await newFavorite.save();

      res.json(favorite);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/favorites
// @desc     Get all favorites
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const favorites = await Favorite.find().sort({ date: -1 });
    res.json(favorites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/favorites/:id
// @desc     Get a single favorite by ID
// @access   Private
router.get('/:id', auth, async (req, res) => {
  try {
    const favorite = await Favorite.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !favorite) {
      return res.status(404).json({ msg: 'Favorite not found' });
    }

    res.json(favorite);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/favorites/:id
// @desc     Delete a favorite from favorites list
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const favorite = await Favorite.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !favorite) {
      return res.status(404).json({ msg: 'Favorite not found' });
    }

    // Check user
    if (favorite.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await favorite.remove();

    res.json({ msg: 'Favorite removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

module.exports = router;
