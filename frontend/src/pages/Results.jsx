import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from 'axios';

const Results = () => {
    const [numberOfSurveys, setNumberOfSurveys] = useState([]);
    const [averageAge, setAverageAge] = useState([]);
    const [highestAge, setHighestAge] = useState([]);
    const [lowestAge,setLowestAge] = useState([]);
    const [pizzaPercentage, setPizzaPercentage] = useState([]);
    const [pastaPercentage, setPastaPercentage] = useState([]);
    const [papAndWorsPercentage, setPapAndWorsPercentage] = useState([]);
    const [movieRating, setMovieRating] = useState([]);
    const [radioRating, setRadioRating] = useState([]);
    const [eatingOutRating, setEatingOutRating] = useState([]); 
    const [tvRating, setTvRating] = useState([]);


    useEffect(() =>{
        axios
        .get("http://localhost:3000/survey/total-surveys")
        .then((response) => {
            setNumberOfSurveys(response.data.count);
        })
        .catch((err) => {
            console.error(err);
        });

        axios
        .get("http://localhost:3000/survey/average-age")
        .then((response) => {
            setAverageAge(response.data.averageAge);
        })
        .catch((err) => {
            console.error(err);
        });

        axios
        .get("http://localhost:3000/survey/oldest-person")
        .then((response) => {
            setHighestAge(response.data.age);
        })
        .catch((err) => {
            console.error(err);
        });

        axios
        .get("http://localhost:3000/survey/youngest-person")
        .then((response) => {
            setLowestAge(response.data.age);
        })
        .catch((err) => {
            console.error(err);
        });

        //Percentage
        axios
        .get("http://localhost:3000/survey/pizza-percentage")
        .then((response) => {
            setPizzaPercentage(response.data.pizzaPercentage);
        })
        .catch((err) => {
            console.error(err);
        });
        axios
        .get("http://localhost:3000/survey/pasta-percentage")
        .then((response) => {
            setPastaPercentage(response.data.pastaPercentage);
        })
        .catch((err) => {
            console.error(err);
        });
        axios
        .get("http://localhost:3000/survey/papAndWors-percentage")
        .then((response) => {
            setPapAndWorsPercentage(response.data.papAndWorsPercentage);
        })
        .catch((err) => {
            console.error(err);
        });

        // preference
        axios
        .get("http://localhost:3000/survey/movies")
        .then((response) => {
            setMovieRating(response.data.averageMovieRating);
        })
        .catch((err) => {
            console.error(err);
        });
        axios
        .get("http://localhost:3000/survey/radio")
        .then((response) => {
            setRadioRating(response.data.averageRadioRating);
        })
        .catch((err) => {
            console.error(err);
        });
        axios
        .get("http://localhost:3000/survey/eat-out")
        .then((response) => {
            setEatingOutRating(response.data.averageEatingOutRating);
        })
        .catch((err) => {
            console.error(err);
        });
        axios
        .get("http://localhost:3000/survey/tv")
        .then((response) => {
            setTvRating(response.data. averagetvRating);
        })
        .catch((err) => {
            console.error(err);
        });
    },[])

  return (
    <div>
      <Navigation />
      <div className="flex justify-center mt-4 font-semibold ">
        Survey Results
      </div>
      <div>
        <div className="flex mx-72 mt-2 justify-between">
          <p>Total number of surveys : </p>
          <p>{numberOfSurveys}</p>
        </div>
        <div className="flex mx-72 mt-2 justify-between">
          <p>Average Age : </p>
          <p>{averageAge}</p>
        </div>
        <div className="flex mx-72 mt-2 justify-between">
          <p>Oldest person who partcipated in survey : </p>
          <p>{highestAge}</p>
        </div>
        <div className="flex mx-72 mt-2 justify-between">
          <p>Youngest person who partcipated in survey : </p>
          <p>{lowestAge}</p>
        </div>
      </div>
      <div className="mt-8">
      <div className="flex mx-72 mt-2 justify-between">
          <p>Percentage of people who like Pizza :</p>
          <p>{pizzaPercentage}</p>
        </div>
        <div className="flex mx-72 mt-2 justify-between">
          <p>Percentage of people who like Pasta :</p>
          <p>{pastaPercentage}</p>
        </div>
        <div className="flex mx-72 mt-2 justify-between">
          <p>Percentage of people who like Pap and Wors :</p>
          <p>{papAndWorsPercentage}</p>
        </div>
      </div>
      <div className="mt-8">
      <div className="flex mx-72 mt-2 justify-between">
          <p>People who like to watch movies :</p>
          <p>{movieRating}</p>
        </div>
        <div className="flex mx-72 mt-2 justify-between">
          <p>People who like to listen to radio :</p>
          <p>{radioRating}</p>
        </div>
        <div className="flex mx-72 mt-2 justify-between">
          <p>People who like to eat out :</p>
          <p>{eatingOutRating}</p>
        </div>
        <div className="flex mx-72 mt-2 justify-between">
          <p>People who like to watch TV :</p>
          <p>{tvRating}</p>
        </div>
      </div>
    </div>
  );
};

export default Results;
