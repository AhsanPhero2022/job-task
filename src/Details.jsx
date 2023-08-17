import { useEffect, useState } from "react";
import Sectors from "./Sectors";
import arrow from "./assets/left-arrow.png";
import { Link } from "react-router-dom";

const AllSaveData = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://y-ahsanphero2022.vercel.app/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div
      className="bg-cover bg-center min-h-screen  bg-no-repeat"
      style={{
        backgroundImage: 'url("https://wallpaperaccess.com/full/117415.jpg")',
      }}
    >
      <Link to="/">
        <button className="p-12 ">
          <img className="w-12 " src={arrow} alt="" />
        </button>
      </Link>
      <h2 className="text-3xl font-semibold text-center text-cyan-300  py-12">
        All submitted data: {user.length}
      </h2>

      <div className=" lg:grid lg:grid-cols-3 lg:gap-4">
        {user.map((category) => (
          <Sectors key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default AllSaveData;
