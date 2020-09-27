const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// POST route
router.post('/', (req, res) => {
  console.log('In server POST');
  let newForm = req.body;
  let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                       VALUES ($1, $2, $3, $4);`;
  pool
    .query(queryString, [
        newForm.feeling,
        newForm.understanding,
        newForm.support,
        newForm.comments,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error('Error in server POST:', err);
      res.sendStatus(500);
    });
});

module.exports = router;
