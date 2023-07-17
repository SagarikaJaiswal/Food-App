//import "../../index.css";
const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div
            className="m-4 p-4 w-[300px] h-[300px] bg-gray-200 rounded-lg"
            key={index}
          >
            <div className="m-2 p-2 h-[100px] bg-white rounded-lg"></div>
            <div className="m-2 p-2 bg-white"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
