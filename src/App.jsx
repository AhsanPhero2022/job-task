import { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function App() {
  const [termsChecked, setTermsChecked] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const categories = [
    "Air",
    "Rail",
    "Road",
    "Water",
    "Creative industries",
    "Energy technology",
    "Environment",
    "Business Service",
    "Software, Hardware",
    "Telecommunications",
    "Tourism",
    "Translation services",
    "Transport and Logistics",
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((item) => item !== category)
        : [...prevSelected, category]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const sectors = selectedCategories;

    const userData = { userName, userEmail, sectors };
    // server side code
    fetch("https://y-ahsanphero2022.vercel.app/user", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "WOW!",
          text: "Submitted Information is Successful",
          width: 400,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          backdrop: `
    rgba(0,0,123,0.4)
    url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-WPcaXWzQ3NQy0ioCyF70fnONKdpQdkSYZg&usqp=CAU")
    left top
    no-repeat
  `,
        });
      });

    if (!termsChecked) {
      alert("Please accept the terms and conditions.");
      return;
    }
  };
  return (
    <div
      className=" p-4 file:bg-cover bg-center min-h-screen  bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://www.wallpaperflare.com/static/872/34/380/circles-background-light-patterns-wallpaper.jpg")',
      }}
    >
      <div className="lg:w-1/2 mx-auto my-20">
        <div className="text-center">
          <Link to="/details">
            <button className="text-white btn btn-info normal-case">
              See All Data
            </button>
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="text-white space-y-4">
          <div>
            <label className="block mb-2 font-medium">Name:</label>
            <input
              type="text"
              name="name"
              required
              className="text-black w-full p-2 border rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              required
              type="email"
              name="email"
              className="text-black w-full p-2 border rounded-md"
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium ">Sectors:</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowCategories(!showCategories)}
                className="w-full p-2 border rounded-md text-left"
              >
                Selected Categories ({selectedCategories.length})
              </button>
              {showCategories && (
                <div className="absolute mt-1 bg-green-300  text-blue-600 border border-gray-300 shadow-md rounded-md">
                  {categories.map((category) => (
                    <label key={category} className="block px-4 py-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="mr-2 form-checkbox"
                      />
                      {category}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                required
                onChange={() => setTermsChecked(!termsChecked)}
                className="form-checkbox"
              />
              <span className="ml-2">I accept the terms and conditions</span>
            </label>
          </div>
          <button type="submit" className="btn bg-cyan-500 hover:bg-cyan-200 ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
