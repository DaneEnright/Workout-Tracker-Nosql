const router = require("express").Router();
const Workouts = require("../models/exercise.js");

router.post("/api/workouts", (req, res) => {
  Workouts.create(req.body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workouts.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workouts.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// router.get("/api/workouts/range", (req, res) => {
//   Workouts.find({})
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

router.delete("api/workouts", (req, res) => {
  Workouts.deleteMany(req.body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
