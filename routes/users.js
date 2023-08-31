/** Routes for users of pg-intro-demo. */

const express = require("express");
const ExpressError = require("../expressError")
const router = express.Router();
const db = require("../db");

router.get('/', async (req, res) => {
    const results = await db.query(`SELECT * FROM users`);
    // console.log(req);
    console.log(results);
    return res.json(results.rows);
});

///
// const getAllUsers = () => db.query('select * FROM users')
//   .then(response => response.rows);

// // and:
// router.get('/', (req, res) => {
//   getAllUsers()
//     .then((users) => {
//       console.log(users);
//     })
//     .catch((err) => {
//         console.log(err);
//       // handle errors
//     });
// });

// router.get('/', (req, res) => {
//     const results = db.query(`SELECT * FROM users`);
//     // return res.json(results.rows);
//     return res.json('this is a test');
// });



module.exports = router;











































// const db = require("../db");

// router.get('/', async (req, res, next) => {
//   try {
//     const results = await db.query(`SELECT * FROM users`);
//     return res.json({ users: results.rows })
//   } catch (e) {
//     return next(e);
//   }
// })
// router.get('/:id', async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const results = await db.query('SELECT * FROM users WHERE id = $1', [id])
//     if (results.rows.length === 0) {
//       throw new ExpressError(`Can't find user with id of ${id}`, 404)
//     }
//     return res.send({ user: results.rows[0] })
//   } catch (e) {
//     return next(e)
//   }
// })

// router.get('/search', async (req, res, next) => {
//   try {
//     const { type } = req.query;
//     const results = await db.query(`SELECT * FROM users WHERE type=$1`, [type])
//     return res.json(results.rows)
//   } catch (e) {
//     return next(e)
//   }
// })

// router.post('/', async (req, res, next) => {
//   try {
//     const { name, type } = req.body;
//     const results = await db.query('INSERT INTO users (name, type) VALUES ($1, $2) RETURNING id, name, type', [name, type]);
//     return res.status(201).json({ user: results.rows[0] })
//   } catch (e) {
//     return next(e)
//   }
// })

// router.patch('/:id', async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { name, type } = req.body;
//     const results = await db.query('UPDATE users SET name=$1, type=$2 WHERE id=$3 RETURNING id, name, type', [name, type, id])
//     if (results.rows.length === 0) {
//       throw new ExpressError(`Can't update user with id of ${id}`, 404)
//     }
//     return res.send({ user: results.rows[0] })
//   } catch (e) {
//     return next(e)
//   }
// })

// router.delete('/:id', async (req, res, next) => {
//   try {
//     const results = db.query('DELETE FROM users WHERE id = $1', [req.params.id])
//     return res.send({ msg: "DELETED!" })
//   } catch (e) {
//     return next(e)
//   }
// })


// module.exports = router;