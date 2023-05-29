//import "../../index.css";
const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="shimmer-card" key={index}>
            <div className="img-container"></div>
            <div className="res-name"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
