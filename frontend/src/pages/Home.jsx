/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [food, setFood] = useState([]);
  const [movieRating, setMovieRating] = useState(0);
  const [radioRating, setRadioRating] = useState(0);
  const [eatingOutRating, setEatingOutRating] = useState(0);
  const [tvRating, setTvRating] = useState(0);

  const navigate = useNavigate();

  const handleFoodSelection = (foodItem) => {
    // Check if the food item is already selected
    const isSelected = food.includes(foodItem);

    // If the food item is selected, remove it from the array
    // If not selected, add it to the array
    const updatedFood = isSelected ? food.filter(item => item !== foodItem) : [...food, foodItem];

    // Set the updated food array as the new state
    setFood(updatedFood);
};


  const handleSubmitSurvey = () => {
    const data = {
      name,
      email,
      dob,
      contactNumber,
      food,
      movieRating,
      radioRating,
      eatingOutRating,
      tvRating,
    };
    axios
      .post("http://localhost:3000/survey", data)
      .then(() => {
        navigate("/survey/results");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-white">
      <Navigation />
      <div className="flex justify-between px-8 py-4">
        <div className="px-8 flex">
          <p className="ml-2">Personal Details:</p>
          <div className="mb-4 ml-36">
            <div className="flex flex-col">
              <label>Full Names</label>
              <input
                type="text"
                className="border border-blue-500 rounded-md px-3 py-1 mb-2 w-72"
                onChange={(e) => setFullName(e.target.value)}
              />
              <label>Email</label>
              <input
                type="email"
                className="border border-blue-500 rounded-md px-3 py-1 mb-2 w-72"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Date of Birth</label>
              <input
                type="date"
                className="border border-blue-500 rounded-md px-3 py-1 mb-2 w-72"
                onChange={(e) => setDob(e.target.value)}
              />
              <label>Contact Number</label>
              <input
                type="text"
                className="border border-blue-500 rounded-md px-3 py-1 mb-2 w-72"
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Favorite Food */}
      <div className="flex justify-between px-8 py-4">
        <div className="px-8 flex">
          <p className="ml-2">What is your favorite food?</p>
          <div className="mb-4 ml-16 flex border-blue-500">
            <input
              type="checkbox"
              id="pizza"
              className="mr-2 border-blue-500"
              onChange={() => handleFoodSelection('Pizza')}
            />
            <label htmlFor="pizza" className="mr-4">
              Pizza
            </label>
            <input
              type="checkbox"
              id="pasta"
              className="mr-2 border-blue-500"
              onChange={() => handleFoodSelection('Pasta')}
            />
            <label htmlFor="pasta" className="mr-4">
              Pasta
            </label>
            <input
              type="checkbox"
              id="papAndWors"
              className="mr-2 border-blue-500"
              onChange={() => handleFoodSelection('Pap and Wors')}
            />
            <label htmlFor="papAndWors" className="mr-4">
              Pap and Wors
            </label>
            <input
              type="checkbox"
              id="other"
              className="mr-2 border-blue-500"
              onChange={() => handleFoodSelection('Other')}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
      </div>
      {/* Ratings */}
      <div className="flex justify-between px-8 py-4">
        <div className="px-8 ">
          <p className="ml-2">
            Please rate your level of agreement on a scale from 1 to 5, with 1
            being "strongly agree" and 5 being "strongly disagree"{" "}
          </p>
          <div className="mt-4 ml-2">
            <table className="border-collapse border border-gray-400 w-full">
              <thead>
                <tr>
                  <th className="bg-gray-200 border border-gray-400 text-center"></th>
                  <th className="bg-gray-200 border border-gray-400 text-center">
                    Strongly Agree
                  </th>
                  <th className="bg-gray-200 border border-gray-400 text-center">
                    Agree
                  </th>
                  <th className="bg-gray-200 border border-gray-400 text-center">
                    Neutral
                  </th>
                  <th className="bg-gray-200 border border-gray-400 text-center">
                    Disagree
                  </th>
                  <th className="bg-gray-200 border border-gray-400 text-center">
                    Strongly Disagree
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400">
                    I like to watch movies
                  </td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="movieRating"
                      value={1}
                      onChange={(e) => setMovieRating(parseInt(e.target.value))}
                    />
                  </td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="movieRating"
                      value={2}
                      onChange={(e) => setMovieRating(parseInt(e.target.value))}
                    />
                  </td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="movieRating"
                      value={3}
                      onChange={(e) => setMovieRating(parseInt(e.target.value))}
                    />
                  </td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="movieRating"
                      value={4}
                      onChange={(e) => setMovieRating(parseInt(e.target.value))}
                    />
                  </td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="movieRating"
                      value={5}
                      onChange={(e) => setMovieRating(parseInt(e.target.value))}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400">
                    I like to listen to radio
                  </td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="radioRating"
                      value={1}
                      onChange={(e) => setRadioRating(parseInt(e.target.value))}
                    />
                  </td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="radioRating"
                      value={2}
                      onChange={(e) => setRadioRating(parseInt(e.target.value))}
                    />
                  </td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="radioRating"
                      value={3}
                      onChange={(e) => setRadioRating(parseInt(e.target.value))}
                    />
                  </td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="radioRating"
                      value={4}
                      onChange={(e) => setRadioRating(parseInt(e.target.value))}
                    />
                  </td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="radioRating"
                      value={5}
                      onChange={(e) => setRadioRating(parseInt(e.target.value))}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400">I like to eat out</td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="eatingOutRating"
                      value={1}
                      onChange={(e) =>
                        setEatingOutRating(parseInt(e.target.value))
                      }
                    />
                  </td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="eatingOutRating"
                      value={2}
                      onChange={(e) =>
                        setEatingOutRating(parseInt(e.target.value))
                      }
                    />
                  </td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="eatingOutRating"
                      value={3}
                      onChange={(e) =>
                        setEatingOutRating(parseInt(e.target.value))
                      }
                    />
                  </td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="eatingOutRating"
                      value={4}
                      onChange={(e) =>
                        setEatingOutRating(parseInt(e.target.value))
                      }
                    />
                  </td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="eatingOutRating"
                      value={5}
                      onChange={(e) =>
                        setEatingOutRating(parseInt(e.target.value))
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400">I like to watch TV</td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="tvRating"
                      value={1}
                      onChange={(e) => setTvRating(parseInt(e.target.value))}
                    />
                  </td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="tvRating"
                      value={2}
                      onChange={(e) => setTvRating(parseInt(e.target.value))}
                    />
                  </td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="tvRating"
                      value={3}
                      onChange={(e) => setTvRating(parseInt(e.target.value))}
                    />
                  </td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="tvRating"
                      value={4}
                      onChange={(e) => setTvRating(parseInt(e.target.value))}
                    />
                  </td>
                  <td className="border border-gray-400 text-center">
                    <input
                      type="radio"
                      className="border-blue-500"
                      name="tvRating"
                      value={5}
                      onChange={(e) => setTvRating(parseInt(e.target.value))}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-8"
          onClick={handleSubmitSurvey}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Home;
