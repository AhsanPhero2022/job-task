const Sectors = ({ category }) => {
  return (
    <div className="my-6 lg:my-0 w-full  bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-200 p-8 rounded-lg shadow-lg  mx-auto">
      <h2 className="text-2xl font-semibold text-white mb-4">
        Name: {category.userName}
      </h2>
      <p className="text-white">Email: {category.userEmail}</p>

      <ul className="text-white  mb-2">
        <li className="">Categories: {category.sectors}</li>
      </ul>
    </div>
  );
};

export default Sectors;
