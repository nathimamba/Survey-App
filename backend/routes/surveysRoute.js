import express from "express";
import { Survey } from "../models/surveyModel.js";
import { calculateAge } from "../utils/utils.js";

const router = express.Router();

// Insert Survey data
router.post("/", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.dob ||
      !req.body.contactNumber ||
      !req.body.food ||
      !req.body.movieRating ||
      !req.body.tvRating ||
      !req.body.radioRating ||
      !req.body.eatingOutRating
    ) {
      return res.status(400).send({
        message:
          "Send all the required fields: name, email, dob, contactNumber, food, moviesRating, tvRating, radioRating, eatingOutRating",
      });
    }

    const newSurvey = {
      name: req.body.name,
      email: req.body.email,
      dob: req.body.dob,
      contactNumber: req.body.contactNumber,
      food: req.body.food,
      movieRating: req.body.movieRating,
      radioRating: req.body.radioRating,
      eatingOutRating: req.body.eatingOutRating,
      tvRating: req.body.tvRating,
    };

    const survey = await Survey.create(newSurvey);
    return res.status(201).send(survey);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

//post list
router.post("/post-list", async (req, res) => {
  try {
    const surveysData = req.body.surveys;

    if (!Array.isArray(surveysData) || surveysData.length === 0) {
      return res.status(400).send({
        message:
          "Send the list of surveys data in the 'surveys' property of the request body as an array.",
      });
    }

    for (const survey of surveysData) {
      if (
        !survey.name ||
        !survey.email ||
        !survey.dob ||
        !survey.contactNumber ||
        !survey.food ||
        !survey.movieRating ||
        !survey.tvRating ||
        !survey.radioRating ||
        !survey.eatingOutRating
      ) {
        return res.status(400).send({
          message:
            "Send all the required fields for each survey: name, email, dob, contactNumber, food, movieRating, tvRating, radioRating, eatingOutRating",
        });
      }
    }

    const createdSurveys = [];

    for (const surveyData of surveysData) {
      const newSurvey = await Survey.create(surveyData);
      createdSurveys.push(newSurvey);
    }

    return res.status(201).send(createdSurveys);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

//Total number of surveys

router.get("/total-surveys", async (req, res) => {
  try {
    const surveys = await Survey.find({});
    return res.status(200).json({
      count: surveys.length,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

//Average Age
router.get("/average-age", async (req, res) => {
  try {
    const surveys = await Survey.find({});

    // Calculate the total age and count of participants
    let totalAge = 0;
    let participantCount = 0;

    surveys.forEach((survey) => {
      if (survey.dob) {
        const dob = new Date(survey.dob);
        const age = calculateAge(dob);

        if (!isNaN(age)) {
          totalAge += age;
          participantCount++;
        }
      }
    });

    const averageAge = participantCount > 0 ? totalAge / participantCount : 0;

    return res.status(200).json({
      averageAge: averageAge.toFixed(2),
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

//Oldest Person
router.get("/oldest-person", async (req, res) => {
  try {
    const surveys = await Survey.find({});

    let highestAge = 0;

    surveys.forEach((survey) => {
      if (survey.dob) {
        const dob = new Date(survey.dob);
        const age = calculateAge(dob);
        if (age > highestAge) {
          highestAge = age;
        }
      }
    });

    return res.status(200).send({ age: highestAge });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

//Youngest Person
router.get("/youngest-person", async (req, res) => {
  try {
    const surveys = await Survey.find({});

    let lowestAge = Infinity;

    surveys.forEach((survey) => {
      if (survey.dob) {
        const dob = new Date(survey.dob);
        const age = calculateAge(dob);
        if (age < lowestAge) {
          lowestAge = age;
        }
      }
    });

    return res.status(200).send({ age: lowestAge });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

//Percentage of people who like pizza
router.get("/pizza-percentage", async (req, res) => {
  try {
    const surveys = await Survey.find({});

    let pizzaCount = 0;
    let totalSurveys = 0;

    surveys.forEach((survey) => {
      if (survey.food && Array.isArray(survey.food)) {
        totalSurveys++;
        const foodLowerCase = survey.food.map((item) => item.toLowerCase());
        if (foodLowerCase.includes("pizza")) {
          pizzaCount++;
        }
      }
    });

    const pizzaPercentage = (pizzaCount / totalSurveys) * 100;

    return res.status(200).json({
      pizzaPercentage: pizzaPercentage.toFixed(1),
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

//Percentage of people who like pasta
router.get("/pasta-percentage", async (req, res) => {
  try {
    const surveys = await Survey.find({});

    let pastaCount = 0;
    let totalSurveys = 0;

    surveys.forEach((survey) => {
      if (survey.food && Array.isArray(survey.food)) {
        totalSurveys++;
        const foodLowerCase = survey.food.map((item) => item.toLowerCase());
        if (foodLowerCase.includes("pasta")) {
          pastaCount++;
        }
      }
    });

    const pastaPercentage = (pastaCount / totalSurveys) * 100;

    return res.status(200).json({
      pastaPercentage: pastaPercentage.toFixed(1),
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

//Percentage of people who like pap and wors
router.get("/papAndWors-percentage", async (req, res) => {
  try {
    const surveys = await Survey.find({});

    let papAndWorsCount = 0;
    let totalSurveys = 0;

    surveys.forEach((survey) => {
      if (survey.food && Array.isArray(survey.food)) {
        totalSurveys++;
        const foodLowerCase = survey.food.map((item) => item.toLowerCase());
        if (foodLowerCase.includes("pap and wors")) {
          papAndWorsCount++;
        }
      }
    });

    const papAndWorsPercentage = (papAndWorsCount / totalSurveys) * 100;

    return res.status(200).json({
      papAndWorsPercentage: papAndWorsPercentage.toFixed(1),
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

//People who like to watch movies
router.get("/movies", async (req, res) => {
  try {
    const surveys = await Survey.find({});

    let totalRating = 0;
    let totalSurveys = 0;

    surveys.forEach((survey) => {
      if (survey.movieRating) {
        totalRating += survey.movieRating;
        totalSurveys++;
      }
    });

    const averageRating = totalSurveys > 0 ? totalRating / totalSurveys : 0;

    return res.status(200).json({
      averageMovieRating: averageRating.toFixed(1),
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.messsage });
  }
});

//People who like to listen to radio
router.get("/radio", async (req, res) => {
  try {
    const surveys = await Survey.find({});

    let totalRating = 0;
    let totalSurveys = 0;

    surveys.forEach((survey) => {
      if (survey.radioRating) {
        totalRating += survey.radioRating;
        totalSurveys++;
      }
    });

    const averageRating = totalSurveys > 0 ? totalRating / totalSurveys : 0;

    return res.status(200).json({
      averageRadioRating: averageRating.toFixed(1),
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.messsage });
  }});

  //People who like to eat out
  router.get('/eat-out', async (req, res) => {
    try {
      const surveys = await Survey.find({});

      let totalRating = 0;
      let totalSurveys = 0;

      surveys.forEach((survey) => {
        if (survey.eatingOutRating) {
          totalRating += survey.eatingOutRating;
          totalSurveys++;
        }
      });

      const averageRating = totalSurveys > 0 ? totalRating / totalSurveys : 0;

      return res.status(200).json({
        averageEatingOutRating: averageRating.toFixed(1),
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: err.messsage });
    }
  });

//People who like to watch TV
router.get('/tv', async (req,res) => {
  try{
    const surveys = await Survey.find({});

    let totalRating = 0;
    let totalSurveys = 0;

    surveys.forEach((survey) => {
      if (survey.tvRating) {
        totalRating += survey.tvRating;
        totalSurveys++;
      }
    });

    const averageRating = totalSurveys > 0 ? totalRating / totalSurveys : 0;

    return res.status(200).json({
      averagetvRating: averageRating.toFixed(1)
    });

  }catch(err){
    console.log(err);
    res.status(500).send({ message: err.messsage});
  }

})

export default router;
